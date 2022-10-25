const asyncHandler = require("express-async-handler");

exports.showTicket = asyncHandler(async (req,res,next) => {
    try {
        res.json({
            status : "created | 201",
            title : req.data.request.title,
            description : req.data.request.description,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})