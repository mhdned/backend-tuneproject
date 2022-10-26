/*------<IMPORTS>------*/
const express = require("express");
const router = express.Router();

const {registerValidate,convertData} = require("./../../middlewares/validation/registerValidation");
const {auth,login} = require('./../../middlewares/database/AuthRequest');
const {registerShow,loginShow} = require('./../../controllers/AuthController');
const {loginValidate} = require("./../../middlewares/validation/loginValidation");
const {findWallet} = require("./../../middlewares/database/WalletRequest");

/*
    *** Register
    *** Login
*/

/*------<BODY ROUTE>------*/
router.post('/register',registerValidate,convertData,auth,findWallet,registerShow);
router.post('/login',loginValidate,login,loginShow);
/*------<EXPORT ROUTE>------*/
module.exports = router;
