import mongoose from "mongoose";

const Address = new mongoose.Schema({
    country: { type: String, require: true },
    state: { type: String, require: true },
    distt: { type: String, require: true },
    village: { type: String, require: true },
    pincode: { type: Number, min: 6, max: 6, require: true },
    landmark: { type: String, require: true }
})

const User = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image: { type: String, require: true },
    admin: { type: Boolean, default: false },
})

export default new mongoose.model('users', User)