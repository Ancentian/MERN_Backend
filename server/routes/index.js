const express = require('express')

const router = express.Router()

const userSignUpController = require("../controllers/userSignup")
const userSigninController = require("../controllers/userSignin")
const userDetailsController = require("../controllers/userDetails")
const authToken = require('../../middleware/authToken')
const userLogout = require("../controllers/userLogout")

router.post("/signup", userSignUpController)
router.post("/signin", userSigninController)
router.get("/user-details", authToken, userDetailsController)  
router.get("/userLogout", userLogout)

module.exports = router