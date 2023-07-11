const twicont = require('../controller/twilocontroller')
const express = require('express')

const router = express.Router()

router.post('/invite',twicont.invite)

module.exports = router;