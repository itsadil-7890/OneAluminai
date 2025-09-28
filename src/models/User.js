import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        enum: ["alumini", "student"],
        trim: true,
        required: true
    },
    AISHE_code_college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College",
        required: true
    },
    collegeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "College"
    },
    about: {
        type: String,
        trim: true,
        required: true
    },
    profileImage: {
        type: String,
        trim: true,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    // for alluminai
    donations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation"
        }
    ],
    education: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Education"
        }
    ],
    experience: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Experience"
        }
    ]
});

const User = mongoose.model.User || mongoose.model("User", userSchema);
export default User;
