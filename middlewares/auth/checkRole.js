const asyncHandler = require('express-async-handler');
const { token } = require('morgan');

exports.checkAdmin = asyncHandler((req,res,next) => {
    try {
        if (req.role === 'admin') {
            next()
        }else{
            res.send('شما به این صفحه دسترسی ندارید')
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})