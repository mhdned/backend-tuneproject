/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {verifyToken} = require("./../../functions/token/tokenHandler");
const {findWallet,chargeWallet} = require('./../../middlewares/database/WalletRequest')
const {walletShow} = require("./../../controllers/WalletController")
const {walletChargeValidate} = require('./../../middlewares/validation/walletValidation')
/*
    *** Info User | only himself
    *** Update User | only himself
*/

/*------<BODY ROUTE>------*/
router.route('/')
    .get(verifyToken,findWallet,walletShow)
    .put(verifyToken,walletChargeValidate,chargeWallet,walletShow);

/*------<EXPORT ROUTE>------*/
module.exports = router;
