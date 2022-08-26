import Seller from "../Model/Seller.js"


const createSeller = async (req, res) => {
    try {
        let result = await Seller.create(req.body);
        res.status(201).send({ status: "Created", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getSellers = async (req, res) => {
    try {
        let total = await Seller.find().count();
        let result = await Seller.find();
        res.status(200).send({ total, result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getSeller = async (req, res) => {
    try {
        let result = await Seller.findById(req.params.id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const deleteSeller = async (req, res) => {
    try {
        let result = await Seller.findByIdAndDelete(req.params.id);
        res.status(200).send({ status: "Deleted", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const updateSeller = async (req, res) => {
    try {
        let result = await Seller.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ status: "Updated", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export { createSeller, getSeller, getSellers, deleteSeller, updateSeller }