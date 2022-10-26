/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<REQUEST VALIDATION>------*/
exports.requestValidation = asyncHandler (async (req,res,next) => {
    try {
        const request = req.body;
        if (!request.title) {
            return res.status(403).send("Errrrrrrrrrrror");
        }
        if (!request.description) {
            return res.status(403).send("Errrrrrrrrrrror");
        }
        // return res.send(request);
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})