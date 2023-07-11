const service=require("../services/contactservices")

const conlist= async (req, res) => {
    try {
        let PhoneNumber;
        const {number} =req.body;
        //onst PhoneNumber = number.map(Number)

        //console.log(PhoneNumber)
        if (Array.isArray(number)) {
            PhoneNumber= number.map(Number);
          } else {
            // Handle the case when stringList is not an array
            console.error('stringList is not an array');
          }
        let user= await service.checklist(PhoneNumber);
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}
module.exports={conlist};
