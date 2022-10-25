module.exports = {
    logAndRes : function (res,param){
        console.log(`Value : ${param} | Type : ${typeof param}`);
        return res.send(param)
    },
    deleteFields : function (param,index = true){
        delete param.__v
        if (index) {
            delete param.password
            delete param._id
            delete param.status
            delete param.createdAt
            delete param.updatedAt
            delete param.deletedAt
        }
    }
}