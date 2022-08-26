import express from 'express'
import upload from '../Config/multerConfig.js';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../Controller/productController.js';
const productRoute = express.Router();

productRoute.post('/', upload.single("image"), createProduct)
productRoute.get('/', getProducts);
productRoute.get('/:id', getProduct)
productRoute.delete('/:id', deleteProduct)
productRoute.put('/:id', upload.single("image"), updateProduct)

export default productRoute;