/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<REQUEST VALIDATION>------*/
exports.requestValidation = asyncHandler (async (req,res,next) => {
    try {
        const request = req.body;
        if (!request.title) {
            return res.status(403).send("لطفا عنوان مورد نظر را وارد کنید");
        }
        if (!request.description) {
            return res.status(403).send("لطفا متن توضیحات را وارد کنید");
        }
        // return res.send(request);
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})