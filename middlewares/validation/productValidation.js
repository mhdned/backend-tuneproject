/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<PRODUCT VALIDATE>------*/
exports.productValidate = asyncHandler((req,res,next) => {
    try {
        let productInfo = req.body;
        if (!productInfo.title 
            || typeof productInfo.title !== "string")
        {
            return res.status(403).send("عنوان وارد شده اشتباه است");   
        }
        if (!productInfo.price 
            || typeof (productInfo.price * 1) !== "number" 
            || productInfo.price < 10) {
            return res.status(403).send("مبلغ محصول اشتباه است");
        }
        if (!productInfo.entities 
            || typeof (productInfo.entities * 1) !== "number" 
            || productInfo.entities < 1) {
            return res.status(403).send("میزان محصول اشتباه است");
        }
        req.product = {
            title : productInfo.title,
            price : productInfo.price,
            entities : productInfo.entities 
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});
/*------<PRODUCT BUY VALIDATE>------*/
exports.productBuyValidate = asyncHandler (async (req,res,next) => {
    try {
        if (req.body.pay) {
            req.pay = Object({
                userId : req.userId,
                wallet : req.body.wallet,
                key : req.body.key
            })
            next()
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})