import SubCategory from "../Model/subCategory.js"

const createSubCategory = async (req, res) => {
    try {
        let result = await SubCategory.create(req.body)
        res.status(201).send({ status: "Created", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getSubCategory = async (req, res) => {
    try {
        let result = await SubCategory.findById(req.params.id);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getSubCategories = async (req, res) => {
    try {
        let total = await SubCategory.find().count();
        let result = await SubCategory.find();
        res.status(200).send({ total, result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const deleteSubCategory = async (req, res) => {
    try {
        let result = await SubCategory.findByIdAndDelete(req.params.id);
        res.status(200).send({ status: "Deleted", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const updateSubCategory = async (req, res) => {
    try {
        let result = await SubCategory.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ status: "Updated", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export { createSubCategory, getSubCategory, getSubCategories, deleteSubCategory, updateSubCategory }