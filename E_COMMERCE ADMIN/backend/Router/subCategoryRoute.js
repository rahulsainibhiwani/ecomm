import express from 'express'
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategory, updateSubCategory } from '../Controller/subCategoryController.js';
const subCategoryRoute = express();

subCategoryRoute.post('/', createSubCategory);
subCategoryRoute.get('/', getSubCategories)
subCategoryRoute.get('/:id', getSubCategory);
subCategoryRoute.delete('/:id', deleteSubCategory);
subCategoryRoute.put('/:id', updateSubCategory)

export default subCategoryRoute;