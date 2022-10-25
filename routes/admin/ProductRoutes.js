/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {checkAdmin} = require('./../../middlewares/auth/checkRole');
const {verifyToken} = require("./../../functions/token/tokenHandler");
const {findUser} = require("./../../middlewares/database/UserRequest");

const {productValidate} = require('./../../middlewares/validation/productValidation');
const {addProduct} = require('./../../middlewares/database/ProductRequest');
const {showProduct} = require('./../../controllers/admin/ProductController')
/*
    *** Register
    *** Login
*/

/*------<BODY ROUTE>------*/
router.route('/')
    .post(verifyToken,findUser,checkAdmin,productValidate,addProduct,showProduct)
/*------<EXPORT ROUTE>------*/
module.exports = router;
