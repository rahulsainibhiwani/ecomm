import mongoose from "mongoose";

const Category = new mongoose.Schema({
    category: { type: String, require: true, unique: true }
})
export default new mongoose.model('category', Category)