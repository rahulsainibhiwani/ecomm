import User from '../Model/User.js'
import uploader from "../Config/cloudConfig.js";

const createUser = async (req, res) => {
    let file = await uploader.uploader.upload(req.file.path);
    let fileURL = file.secure_url;
    // console.log(fileURL, req.body)
    try {
        let result = await User.create({ ...req.body, image: fileURL });
        res.status(201).send({ status: "Created", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUsers = async (req, res) => {
    try {
        let result = await User.find();
        let total = await User.find().count();
        res.status(200).send({ total, result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res) => {
    try {
        let result = await User.findById(req.params.id);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);
        res.status(200).send({ status: "Deleted", result })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateUser = async (req, res) => {
    let file = await uploader.uploader.upload(req.file.path);
    let fileURL = file.secure_url;
    try {
        let result = await User.findByIdAndUpdate(req.params.id, { ...req.body, image: fileURL });
        res.status(200).send({ status: "Updated", result });
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export { createUser, getUsers, getUser, deleteUser, updateUser };