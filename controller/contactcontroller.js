const service=require("../services/contactservices")

const conlist= async (req, res) => {
    try {
        const {PhoneNumber} =req.body
        //console.log(PhoneNumber)
        
        let user= await service.checklist(PhoneNumber);
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}
module.exports={conlist};