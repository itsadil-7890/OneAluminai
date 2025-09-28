import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    transactionId: {
        type: String,
        required: true,
    },
    paymentMode: {
        type: String,
        enum: ["online", "cash"],
        default: "online",
    },
    

})

const Donation = mongoose.model.Donation || mongoose.model("Donation", donationSchema);
export default Donation;
