import mongoose from "mongoose";

const Seller = new mongoose.Schema({
    name: { type: String, require: true },
    mobile: { type: Number, maxlength: 10, require: true },
    dateOfBirth: { type: String, require: true },
    shopName: { type: String },
    shopAddress: { type: String }
})

export default new mongoose.model('seller', Seller)