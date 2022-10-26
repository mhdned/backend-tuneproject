/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {ipdbfile} = require('./../../configs/config');
/*------<FILE UPLOAD>------*/
exports.fileUpload = asyncHandler(async (req,res,next) => {
    try {
        const fileUpload = req.file;
        const newFile = new Object({
            path: fileUpload.path,
            name: fileUpload.filename,
            formatFile: fileUpload.mimetype,
            userId: req.userId,
            size: fileUpload.size,
        })
        const resp = await axios.post(ipdbfile,newFile);
        if (resp) {
            req.data = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});
/*------<FILE DELETE | DATABASE>------*/
exports.fileDelete = asyncHandler (async (req,res,next) => {
    try {
        const fileName = req.body;
        const file = new Object({
            name: fileName,
        })
        const resp = await axios.delete(ipdbfile,file);
        if (resp) {
            req.data = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})