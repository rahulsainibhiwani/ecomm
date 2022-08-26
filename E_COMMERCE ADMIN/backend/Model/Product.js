import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name: { type: String, require: true },
    subCategoryFK: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory", require: true },
    sellerFK: { type: mongoose.Schema.Types.ObjectId, ref: "seller" },
    quantity: { type: Number, require: true },
    price: { type: Number, require: true },
    brand: { type: String, require: true },
    image: { type: String, require: true }
})
export default new mongoose.model('product', Product);