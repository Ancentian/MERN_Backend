const express = require('express')

const router = express.Router()

const userSignUpController = require("../controllers/userSignup")
const userSigninController = require("../controllers/userSignin")
const userDetailsController = require("../controllers/userDetails")
const authToken = require('../../middleware/authToken')
const userLogout = require("../controllers/userLogout")
const allUsers = require("../controllers/allUsers")
const updateUser = require("../controllers/updateUser")
const uploadProductController = require("../controllers/uploadProduct")
const getProductController = require("../controllers/getProduct")
const updateProductController = require("../controllers/updateProduct")

router.post("/signup", userSignUpController)
router.post("/signin", userSigninController)
router.get("/user-details", authToken, userDetailsController)  
router.get("/userLogout", userLogout)

//Admin Panel
router.get("/all-users", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

//Upload products
router.post("/upload-product", authToken, uploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product", authToken, updateProductController)

module.exports = router