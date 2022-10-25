const asyncHandler = require("express-async-handler");

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
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})