const PayModel = require("../model/pay-model")

module.exports.payadd = function(req ,res){
    let user = req.body.user
    let transaction = req .body.transaction
    let amount = req.body.amount
    let transactionDate = req.body.transactionDate

    let pay =  new PayModel({
        user:user,
        transaction:transaction,
        amount:amount,
        transactionDate:transactionDate
    })
    pay.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.displaypay = function(req ,res){
    PayModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletepay = function(req ,res){
    let userId = req.params.userId 

    PayModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}
module.exports.updatepay = function(req,res){
    let paramuserId =req.body.userId
    let paramuser =  req.body.user
    let paramtransaction = req.body.transaction
    let paramamount =  req.body.amount
    let paramtransactionDate =  req.body.transactionDate

    PayModel.updateOne({_id:paramuserId},{user:paramuser,transaction:paramtransaction,amount:paramamount,transactionDate:paramtransactionDate},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
    
   

}
