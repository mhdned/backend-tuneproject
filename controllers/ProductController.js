/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<SHOW ALL PRODUCT>------*/
exports.getProducts = asyncHandler(async (req,res,next) => {
    try {
        res.json(req.data);
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<SHOW SINGLE PRODUCT>------*/
exports.getProduct = asyncHandler(async (req,res,next) => {
    try {
        res.json(req.data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<SHOW SINGLE PRODUCT AFTER BUY>------*/
exports.boughtProduct = asyncHandler(async (req,res,next) => {
    try {
        res.json(req.data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})