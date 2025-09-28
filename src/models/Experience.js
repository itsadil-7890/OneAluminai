import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Full-time", "freelance", "Internship"],
        default: "Full-time"
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        default: Date.now
    },
    to: {
        type: Date,
        required: function () { return !this.currentlyWorking; },
        validate: {
            validator: function (toDate) {
                if (this.currentlyWorking) return !toDate;
                return !this.from || toDate > this.from;
            },
            message: 'End date must be after start date'
        }
    },
    skills: [{
        type: String,
        required: true,
        trim: true
    }],
    locationType: {
        type: String,
        enum: ['On-site', 'Hybrid', 'Remote'],
        default: 'On-site'
    }

})

const Experience = mongoose.model.Experience || mongoose.model("Experience", experienceSchema);
export default Experience;
