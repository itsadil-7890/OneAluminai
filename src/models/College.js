import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    AISHE_code: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keyFeatures: [{
        type: String,
        trim: true
    }],
    url: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true
    },
    gallery: [
        {
            type: String,
            required: true
        }
    ],

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ],
    alumini: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    donations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Donation"
        }
    ]

})

const College = mongoose.model.College || mongoose.model("College", CollegeSchema)
export default College

