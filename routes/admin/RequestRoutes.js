/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {checkAdmin} = require('./../../middlewares/auth/checkRole');
const {verifyToken} = require("./../../functions/token/tokenHandler");
const {findUser} = require("./../../middlewares/database/UserRequest");

const {allTicketAdmin,singleTicketAdmin,singleTicketAdminAnswer} = require("./../../middlewares/database/TicketRequest")

/*
    *** all
    *** single
    *** update
*/

/*------<BODY ROUTE>------*/
router.route('/')
    .get(verifyToken,findUser,checkAdmin,allTicketAdmin)

router.route('/:reqID')
    .get(verifyToken,findUser,checkAdmin,singleTicketAdmin)
    .put(verifyToken,findUser,checkAdmin,singleTicketAdminAnswer)
/*------<EXPORT ROUTE>------*/
module.exports = router;
