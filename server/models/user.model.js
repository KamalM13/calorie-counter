import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2,
    },
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);