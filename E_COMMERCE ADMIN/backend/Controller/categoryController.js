import Category from "../Model/Category.js"


const createCategory = async (req, res) => {
    try {
        const result = await Category.create(req.body);
        res.status(201).send({ status: "Created", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getCategories = async (req, res) => {
    try {
        const total = await Category.find().count();
        const result = await Category.find();
        res.status(200).send({ total, result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getCategory = async (req, res) => {
    try {
        const result = await Category.findById(req.params.id);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const deleteCategory = async (req, res) => {
    try {
        const result = await Category.findByIdAndDelete(req.params.id);
        res.status(200).send({ status: "Deleted", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const updateCategory = async (req, res) => {
    try {
        const result = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ Status: "Updated", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export { createCategory, getCategories, getCategory, deleteCategory, updateCategory }