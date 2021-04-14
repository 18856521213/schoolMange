module.exports = {
    response(res,status,success,message,count,data){
        res.json({
            status,
            success,
            failure:!success,
            message,
            total:count,
            data
          })
    }

}