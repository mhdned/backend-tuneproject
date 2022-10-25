/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {verifyToken} = require("./../../functions/token/tokenHandler");
const {requestValidation} = require("./../../middlewares/validation/requestValidation");
const {sendTicket,allTicket} = require("./../../middlewares/database/TicketRequest")
const {showTicket} = require('./../../controllers/RequestController');

/*
    *** Send Request
    *** All Request
    *** Single Request
*/

/*------<BODY ROUTE>------*/

router.route('/')
    .post(verifyToken,requestValidation,sendTicket,showTicket)
    .get(verifyToken,allTicket)
//     .get()
// router.get('/:reqId');

/*------<EXPORT ROUTE>------*/
module.exports = router;
