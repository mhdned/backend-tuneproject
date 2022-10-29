/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<WALLET CHARGE VALIDATE>------*/
exports.walletChargeValidate = asyncHandler (async (req,res,next) => {
    try {
        const amount = req.body.amount;
        if (amount < 1) {
            return res.status(403).send("میزان شارژ کیف ول باید بیشتر از 1 باشد");
        }
        if (typeof amount !== 'number') {
            return res.status(403).send("میزان شارژ باید عدد باشد");
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})