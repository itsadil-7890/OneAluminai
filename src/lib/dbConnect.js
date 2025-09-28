import mongoose from 'mongoose';

// Cache the connection to prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes a connection to MongoDB with optimized settings
 * @returns {Promise<mongoose.Connection>} Mongoose connection
 */
async function connectDB() {
  // If we have a cached connection in development, use it
  if (cached.conn) {
    return cached.conn;
  }

  // Validate environment variables
  const mongoUri = process.env.MONGODB_URI || process.env.PROJECT_URL;
  if (!mongoUri) {
    throw new Error(
      'MongoDB connection string not found. Please set MONGODB_URI in your .env.local file.'
    );
  }

  // Connection options for better performance and reliability
  const options = {
    maxPoolSize: 10, // Maximum number of connections in the connection pool
    serverSelectionTimeoutMS: 5000, // Time to wait for server selection
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    autoIndex: process.env.NODE_ENV !== 'production', // Auto-create indexes in development only
  };

  try {
    if (!cached.promise) {
      // Create a new connection promise
      cached.promise = mongoose.connect(mongoUri, options).then((mongoose) => {
        console.log('✅ MongoDB Connected');
        return mongoose;
      });
    }

    // Wait for the connection to be established
    cached.conn = await cached.promise;
    
    // Set up connection event handlers
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to DB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from DB');
    });

    // Close the Mongoose connection when the Node process ends
    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close();
        console.log('Mongoose connection closed through app termination');
        process.exit(0);
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
        process.exit(1);
      }
    });

    return cached.conn;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    
    // In case of connection error, clear the cached connection
    cached.conn = null;
    cached.promise = null;
    
    // Only exit in production, in development we want to see the error
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    
    throw error; // Re-throw to be handled by the calling function
  }
}

export default connectDB;
