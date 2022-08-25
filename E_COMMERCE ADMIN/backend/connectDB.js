import mongoose from "mongoose";

const connectDB = async () => {
    try {
        let result = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB;