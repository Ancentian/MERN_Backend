const express = require('express')

const router = express.Router()

const userSignUpController = require("../controllers/user/userSignup")
const userSigninController = require("../controllers/user/userSignin")
const userDetailsController = require("../controllers/user/userDetails")
const authToken = require('../../middleware/authToken')
const userLogout = require("../controllers/user/userLogout")
const allUsers = require("../controllers/user/allUsers")
const updateUser = require("../controllers/user/updateUser")
const uploadProductController = require("../controllers/product/uploadProduct")
const getProductController = require("../controllers/product/getProduct")
const updateProductController = require("../controllers/product/updateProduct")

const getProductCategory = require("../controllers/product/getCategory")
const getCategoryWiseProduct = require("../controllers/product/getCategoryWiseProduct")
const getProductDetails = require("../controllers/product/getProductDetails")


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

router.get("/get-productCategory", getProductCategory)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)

module.exports = router