/*------<IMPORTS>------*/
const express = require("express");
const router = express.Router();

const {userShow} = require('./../../controllers/admin/UserController')
const {findUser} = require("./../../middlewares/database/UserRequest");
const {verifyToken} = require("./../../functions/token/tokenHandler");
const {convertUpdateData,updateValidate} = require("./../../middlewares/validation/updateUserValidation")
const {updateUser} = require('./../../middlewares/database/UserRequest')

/*
    *** Info User | only himself
    *** Update User | only himself
*/

/*------<BODY ROUTE>------*/
router.route('/')
    .get(verifyToken,findUser,userShow)
    .patch(verifyToken,updateValidate,convertUpdateData,updateUser,userShow);
/*------<EXPORT ROUTE>------*/
module.exports = router;
