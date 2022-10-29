/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {ipdbwallet} = require('./../../configs/config');
/*------<FIND WALLET>------*/
exports.findWallet = asyncHandler(async (req,res,next) => {
    try {
        // console.log(req.userId);
        const resp = await axios.get(`${ipdbwallet}/${req.userId}`);
        if (resp) {
            req.wallet = resp.data
            req.walletId = resp.data._id
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<CHARGE WALLET>------*/
exports.chargeWallet = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.put(`${ipdbwallet}/${req.userId}`,req.body);
        if (resp) {
            req.wallet = resp.data
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})