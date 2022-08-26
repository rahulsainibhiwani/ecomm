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
    password: { type: String, require: true },
    image: { type: String },
    admin: { type: Boolean, default: false },
    address: [Address]
})

export default new mongoose.model('users', User)