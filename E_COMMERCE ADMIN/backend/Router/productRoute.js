import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../Controller/productController.js';
const productRoute = express.Router();

productRoute.post('/', createProduct)
productRoute.get('/', getProducts);
productRoute.get('/:id', getProduct)
productRoute.delete('/:id', deleteProduct)
productRoute.put('/:id', updateProduct)

export default productRoute;