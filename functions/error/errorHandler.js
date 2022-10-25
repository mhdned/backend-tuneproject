module.exports = {
    dropError : function (res,error,message,type = `Server`,status = 500){
        console.log(`Error ((${type})) : ${error}`);
        return res.status(status).send(`Message ((${type})) : ${message}`);
    }
}