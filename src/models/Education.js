import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    level: {
        type: String,
        enum: ["10th", "12th", "graduation", "post-graduation"],
        required: true
    },
    from: {
        type: Date,
        required: true
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
    Institute_name: {
        type: String,
        required: true
    },

    // percentage
    grades: {
        type: Number,
        required: true
    }
})

const Education = mongoose.model.Education || mongoose.model("Education", educationSchema);
export default Education

