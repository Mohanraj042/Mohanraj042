const controller=require("../controller/contactcontroller")
const exp=require("express")
const router=exp.Router()

router.post("/contactlist",controller.conlist);





module.exports=router;