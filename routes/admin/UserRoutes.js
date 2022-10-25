/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {getAllUser,getSingleUser,updateSingleUser,deleteSingleUser} = require("./../../middlewares/database/UserRequest");
const {checkAdmin} = require('./../../middlewares/auth/checkRole');
const {verifyToken} = require("./../../functions/token/tokenHandler");

const {findUser} = require("./../../middlewares/database/UserRequest");

const {allUserShow,userShow} = require('./../../controllers/admin/UserController')

const {convertUpdateData,updateValidate} = require("./../../middlewares/validation/updateUserValidation")
/*
    *** Register
    *** Login
*/

/*------<BODY ROUTE>------*/
router.route('/users')
    .get(verifyToken,findUser,checkAdmin,getAllUser,allUserShow)
router.route('/users/:username')
    .get(verifyToken,findUser,checkAdmin,getSingleUser,userShow)
    .put(verifyToken,findUser,checkAdmin,updateValidate,convertUpdateData,updateSingleUser,userShow)
    .delete(verifyToken,findUser,checkAdmin,deleteSingleUser,userShow)
/*------<EXPORT ROUTE>------*/
module.exports = router;
