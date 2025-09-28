import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    // to which type this review belongs
    reviewType: {
        type: String,
        enum: ["alumni", "blogs", "college"],
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

const Review = mongoose.model.Review || mongoose.model("Review", reviewSchema);
export default Review;
