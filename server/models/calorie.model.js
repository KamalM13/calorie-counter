import mongoose from "mongoose";


const Schema = mongoose.Schema;

const calorieSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
});

export default mongoose.model("Calorie", calorieSchema);