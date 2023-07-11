const usercont = require('../controller/todocontroller')
const express = require('express')

const router = express.Router()

router.post('/addtodo',usercont.taskadd)
router.post('/gettodo',usercont.gettodo)
router.post('/deletetodo',usercont.deletetodo)

module.exports = router;