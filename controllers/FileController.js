/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
/*------<SHOW INFO AFTER FILE>------*/
exports.uploadFile = asyncHandler(async (req,res,next) => {
    try {
        res.status(201).json({
            status : 'Success | 200',
            file : {
                name : req.data.file.name,
                formatFile : req.data.file.formatFile,
                size : req.data.file.size,
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<SHOW MESSAGE AFTER DELETE FILE>------*/
exports.deleteFile = asyncHandler(async (req,res,next) => {
    try {
        res.status(201).json({
            status : 'Success | 203',
            message : 'Deleted'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})