const UserService = require('../services/user.services');
const bcrypt=require("bcrypt")

const register = async (req, res) => {
    try {
        const { PhoneNumber, password } = req.body;
        const user = await UserService.registeruser(PhoneNumber, password);
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}
const login = async (req, res) => {
    try {
        const { PhoneNumber, password } = req.body;

        // finding the user
        const user = await UserService.checkuser(PhoneNumber);
        if (!user) {
            throw new Error('User not found');
        }

        // checking the password
        const isMatch = await bcrypt.compare(password , user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }


        let tokenData = {
            id: user._id,
            email: user.PhoneNumber
        }

        const token = await UserService.generatetoken(tokenData, 'secretkey');
        res.status(200).json({
            status: true,
            token: token
        })
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = {
    register,
    login
}