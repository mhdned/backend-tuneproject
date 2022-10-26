/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<SHOW USER WALLET>------*/
exports.walletShow = asyncHandler(async (req,res,next) => {
    try {
        res.status(200).json({
            status : 'Success | 200',
            data : req.wallet
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})