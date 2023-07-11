const mongoose= require('mongoose')
const user=require("./user.model")

const schema = mongoose.Schema

const addtask=new schema({
                userId:{
                    type:schema.Types.ObjectId,
                    ref:'contact'
                    },
                title:{
                        type:"string",
                        required:true
                      },
                des:{
                            type:"string",
                            required:true
                        }
                    })



const task=mongoose.model("Todo",addtask);



module.exports=task;