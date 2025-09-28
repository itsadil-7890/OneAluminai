import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import connectDB from "@/lib/dbConnect";

// This is a Next.js API route handler
export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // Input validation
        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Connect to database
        await connectDB();

        // Find user by email
        const user = await User.findOne({ email }).select('+password').lean();
        
        // Check if user exists
        if (!user) {
            return NextResponse.json(
                { success: false, message: 'user is not registered, register first' },
                { status: 401 }
            );
        }

        // Verify password (using bcrypt for hashed passwords)
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Set HTTP-only cookie
        cookies().set({
            name: 'auth_token',
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });

        const sendData={
            name:user.firstName+" "+user.lastName,
            email:user.email,
            role:user.role,
        }
        return NextResponse.json({
            success: true,
            message: 'Login successful',
            user: sendData
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

