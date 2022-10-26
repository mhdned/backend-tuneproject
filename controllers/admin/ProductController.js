/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<SHOW PRODUCT>------*/
exports.showProduct = asyncHandler(async(req,res,next) => {
    try {
        res.status(200).json(req.data);
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})