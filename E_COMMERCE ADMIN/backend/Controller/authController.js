import User from '../Model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const auth = async (req, res) => {
    let { email, password } = req.body;
    // console.log(email, password)
    try {
        let user = await User.findOne({ email });
        if (!user) {
            res.send({ status: "User not Found", msg: "mismatch" })
        } else {
            let verify = await bcrypt.compare(password, user.password);
            if (!verify) {
                res.send({ status: "Invalid Password", msg: "mismatch" })
            } else {
                let token = await jwt.sign({
                    ...verify,
                    expiresIn: 120
                }, process.env.JWT_SECRET_KEY);
                res.status(200).send({ token, status: "Login Success" })
            }

        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}
export default auth;