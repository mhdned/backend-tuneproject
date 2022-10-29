/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const {timeZoneToDate} = require("./../utils/convertorData")
/*------<SHOW INFO AFTER CREATE ACCOUNT>------*/
exports.registerShow = asyncHandler(async (req,res,next) => {
    res.status(200).json({
        status : 'Success | 200',
        route : req.data.route,
        token : req.data.token,
        user : {
            userName : req.data.user.userName ,
            email : req.data.user.email ,
            role : req.data.user.role ,
        }
    });
})
/*------<SHOW INFO AFTER LOGIN ACCOUNT>------*/
exports.loginShow = asyncHandler(async (req,res,next) => {
    try {
        res.status(200).json({
            status : 'Success | 200',
            route : req.data.route,
            token : req.data.token,
            user : {
                userName : req.data.user.userName ,
                email : req.data.user.email ,
                role : req.data.user.role ,
                birth : timeZoneToDate(req.data.user.birth)
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})