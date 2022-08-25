import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './connectDB.js'
import userRoute from './Router/userRoutes.js';
import categoryRoute from './Router/categoryRoutes.js';
import subCategoryRoute from './Router/subCategoryRoute.js';
import productRoute from './Router/productRoute.js';
const app = express();

app.use(express.json())
app.use('/user', userRoute)
app.use('/category', categoryRoute)
app.use('/subCategory', subCategoryRoute)
app.use('/product', productRoute)
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})