import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../Controller/userController.js';
const userRoute = express.Router();
import upload from '../Config/multerConfig.js'

userRoute.post('/', upload.single("image"), createUser)
userRoute.get('/', getUsers)
userRoute.get('/:id', getUser)
userRoute.delete('/:id', deleteUser)
userRoute.put('/:id', upload.single("image"), updateUser)

export default userRoute;