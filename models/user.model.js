const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const schema= mongoose.Schema

const UserRegister= new schema({
    PhoneNumber: {
        type:Number,
        required: true,
            count:10
    },
    password: {
        type:"string",
        count:8,
        required: true
    }
})
/// password bcrypt
UserRegister.pre('save', async function () {
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    catch (err) {
        console.log(err)
    }
})
const UserModel = mongoose.model("conatct", UserRegister);

module.exports =UserModel;