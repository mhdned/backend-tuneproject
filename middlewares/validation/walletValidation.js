/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<WALLET CHARGE VALIDATE>------*/
exports.walletChargeValidate = asyncHandler (async (req,res,next) => {
    try {
        const amount = req.body.amount;
        if (amount < 1) {
            return res.status(403).send("Errrrrrrrrrrror");
        }
        if (typeof amount !== 'number') {
            return res.status(403).send("Errrrrrrrrrrror");
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})