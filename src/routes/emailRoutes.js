const express = require("express")
const { sendEmail } = require('../controller/emailController')

const router = express.Router()

router.post('/contact', sendEmail)

module.exports = router