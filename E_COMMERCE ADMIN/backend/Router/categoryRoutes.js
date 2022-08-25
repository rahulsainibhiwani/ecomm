import express from 'express'
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../Controller/categoryController.js';
const categoryRoute = express.Router();

categoryRoute.post('/', createCategory)
categoryRoute.get('/', getCategories)
categoryRoute.get('/:id', getCategory)
categoryRoute.delete('/:id', deleteCategory)
categoryRoute.put('/:id', updateCategory)

export default categoryRoute;