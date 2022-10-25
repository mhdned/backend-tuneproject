/*------<INTIATE ROUTE>------*/
const express = require("express");
const router = express.Router();

const {verifyToken} = require("./../../functions/token/tokenHandler");
const {uploadFile,deleteFile} = require('./../../controllers/FileController');
const {uploadUserFile} = require('./../../configs/multer');
const {fileUpload,fileDelete} = require("./../../middlewares/database/FileRequest");
/*
    *** Upload File | only himself
    *** Delete File | only himself
*/

/*------<BODY ROUTE>------*/
router.route('/')
    .post(verifyToken,uploadUserFile,fileUpload,uploadFile)
    .delete(verifyToken,fileDelete,deleteFile);

/*------<EXPORT ROUTE>------*/
module.exports = router;
