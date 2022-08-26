import express from 'express'
import dotenv from 'dotenv'
import multer from 'multer'
dotenv.config();
import connectDB from './connectDB.js'
import userRoute from './Router/userRoutes.js';
import categoryRoute from './Router/categoryRoutes.js';
import subCategoryRoute from './Router/subCategoryRoute.js';
import productRoute from './Router/productRoute.js';
import sellerRoute from './Router/sellerRoute.js';
import authRoute from './Router/authRoute.js';
const app = express();
const upload = multer();

// app.use(upload.array())
app.use(express.json())
app.use('/user', userRoute)
app.use('/category', categoryRoute)
app.use('/subCategory', subCategoryRoute)
app.use('/product', productRoute)
app.use('/seller', sellerRoute)
app.use('/auth', authRoute)
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})