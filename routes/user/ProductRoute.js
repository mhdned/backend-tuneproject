/*------<IMPORTS>------*/
const express = require("express");
const router = express.Router();

const {verifyToken} = require("./../../functions/token/tokenHandler");
const {getProducts,getProduct,boughtProduct} = require('./../../controllers/ProductController');
const {allProdcut,singleProduct,buyProduct} = require('./../../middlewares/database/ProductRequest');
const {productBuyValidate} = require('./../../middlewares/validation/productValidation');

/*
    *** Show All Product
    *** Show Single Product
*/

/*------<BODY ROUTE>------*/
router.route('/')
    .get(verifyToken,allProdcut,getProducts)
router.route('/:prodID')
    .get(verifyToken,singleProduct,getProduct)
    .post(verifyToken,productBuyValidate,buyProduct,boughtProduct);
/*------<EXPORT ROUTE>------*/
module.exports = router;
