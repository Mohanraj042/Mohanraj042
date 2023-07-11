const UserModel = require('../models/user.model')
const jwt=require("jsonwebtoken")

class UserService {

    static async registeruser(PhoneNumber, password) {
        try {
            const createuser = await UserModel.create({PhoneNumber, password });
            return createuser;
        }
        catch (err) {
            console.log(err);
        }
    }
    static async checkuser(PhoneNumber) {
        try {
            return await UserModel.findOne({PhoneNumber});
        }
        catch (err) {
            console.log(err);
        }
    }

    static async generatetoken(tokenData, secretkey) {
        try {
            return jwt.sign(tokenData, secretkey, { expiresIn: '1Y' });
        }
        catch (err) {
            console.log(err);
        }
    }
 
}

module.exports =UserService;