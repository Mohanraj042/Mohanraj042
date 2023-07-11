const checkmodel=require("../models/user.model")

class contactservices{

    static async checklist(PhoneNumber) {
        return new Promise(async (resolve, reject) => {
          try {
            let phones = [];
            await Promise.all( PhoneNumber.map(async (value) => {
                const match = await checkmodel.findOne({ PhoneNumber: value });
                if (match) {
                  //console.log(match['PhoneNumber']);
                  phones.push(match['PhoneNumber']);
                  //console.log(phones);
                }
              })
            );
            resolve(phones);
          } catch (error) {
            reject(error);
          }
        });
      }
      

}

module.exports=contactservices;