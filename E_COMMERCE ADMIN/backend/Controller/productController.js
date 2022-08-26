import cloudinary from "../Config/cloudConfig.js";
import Product from "../Model/Product.js"


const createProduct = async (req, res) => {
    let file = await cloudinary.uploader.upload(req.file.path);
    let fileURL = file.secure_url;
    try {
        let result = await Product.create({ ...req.body, image: fileURL });
        res.status(201).send({ status: "Created", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getProduct = async (req, res) => {
    try {
        let result = await Product.findById(req.params.id);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getProducts = async (req, res) => {
    try {
        let total = await Product.find().count();
        let result = await Product.find().populate({
            path: "subCategoryFK",
            populate: { path: "categoryFK" }
        }).populate('sellerFK')
        res.status(200).send({ total, result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const deleteProduct = async (req, res) => {
    try {
        let result = await Product.findByIdAndDelete(req.params.id);
        res.status(200).send({ status: "Deleted", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const updateProduct = async (req, res) => {
    try {
        let result = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ status: "Updated", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export { createProduct, getProduct, getProducts, deleteProduct, updateProduct }