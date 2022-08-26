import auth from "../Controller/authController.js";
import express from 'express'
const authRoute = express.Router();

authRoute.post('/signIn', auth)

export default authRoute;