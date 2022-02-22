const subsModel =  require("../model/subcription-model")

module.exports.addData = function(req , res){
     let userId = req.body.userId
    let subscribeDate = req.body.subscribeDate
    let expdate = req.body.expdate
    let advRenewdate =  req.body.advRenewdate
    let isAdvRenew =  req.body.isAdvRenew

    let subs = new subsModel({
        userId:userId,
        subscribeDate:subscribeDate,
        expdate:expdate,
        advRenewdate:advRenewdate,
        isAdvRenew:isAdvRenew
    })

    subs.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })

}

module.exports.displaydata = function(req ,res){

    subsModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletedata = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    subsModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updatedata = function(req , res){
    let paramuserId = req.body.userId
    let paramsubscribeDate =  req.body.subscribeDate
    let paramexpdate = req.body.expdate
    let paramadvRenewdate = req.body.advRenewdate
    let paramisAdvRenew = req.body.isAdvRenew

    subsModel.updateOne({_id:paramuserId},{subscribeDate:paramsubscribeDate,expdate:paramexpdate,advRenewdate:paramadvRenewdate,isAdvRenew:paramisAdvRenew},function(err ,data){

        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
}