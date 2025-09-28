import mongoose from "mongoose";

const collegeUserSchema = new mongoose.Schema({
    headFirstName: {
        type: String,
        required: true
    },
    headLastName: {
        type: String,
        required: true
    },
    headEmail: {
        type: String,
        required: true
    },
    collegePassword: {
        type: String,
        required: true
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College",
        required: true,
    },
    statusVerification: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    }
})

const CollegeUser = mongoose.model("CollegeUser", collegeUserSchema)
export default CollegeUser
