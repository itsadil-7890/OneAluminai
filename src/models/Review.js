import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    reviewType: {
        type: String,
        enum: ["User", "Blog", "College"],
        required: true,
    },
    entityId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "reviewType",
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

})

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
