import mongoose from "mongoose";

const SubCategory = new mongoose.Schema({
    subCategory: { type: String, require: true, unique: true },
    categoryFK: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "category" }
})
export default new mongoose.model('SubCategory', SubCategory)