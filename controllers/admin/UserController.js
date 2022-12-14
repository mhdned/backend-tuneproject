/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const {timeZoneToDate} = require('./../../utils/convertorData')
/*------<ALL USER>------*/
exports.allUserShow = asyncHandler((req,res,next) => {
    try {
        req.allUser.forEach(el => {
            delete el.password;
            delete el.status;
            delete el.verified;
            delete el.createdAt;
            delete el.updatedAt;
            delete el.nationalCode
            delete el.__v;
            el.birth = timeZoneToDate(el.birth);
        });
        res.status(200).json(req.allUser);
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<SINGLE USER>------*/
exports.userShow = asyncHandler((req,res,next) => {
    try {
        req.user.birth =  timeZoneToDate(req.user.birth);
        res.status(200).json({
            userName : req.user.userName,
            fullName : req.user.fullName,
            email : req.user.email,
            userName : req.user.userName,
            birth : req.user.birth,
            phoneNumber : req.user.phoneNumber,
            role : req.user.role,
            deletedAt : req.user.deletedAt
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})