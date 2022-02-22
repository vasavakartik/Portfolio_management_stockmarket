const PstockModel = require("../model/userportstock-model")

module.exports.addupstock = function(req , res){
    let user = req.body.user
    let portfolio =req.body.portfolio
    let stock =  req.body.stock
    let qty = req.body.qty
    let purchaseDate= req.body.purchaseDate
    let investPrice= req.body.investPrice
    let CurrentPrice = req.body.CurrentPrice
    
    let psstock = new PstockModel({
        user:user,
        portfolio:portfolio,
        stock:stock,
        qty:qty,
        purchaseDate:purchaseDate,
        investPrice:investPrice,
        CurrentPrice:CurrentPrice

    })

    psstock.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.displayusport = function(req ,res){
    PstockModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteusport = function(req ,res){
    let userId = req.params.userId 

    PstockModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateport = function(req ,res){
    let paramuserId =  req.body.userId
    let paramportfolio = req.body.portfolio
    let paramstock =  req.body.stock
    let paramqty =  req.body.qty
    let parampurchaseDate = req.body.purchaseDate
    let paraminvestPrice = req.body.investPrice
    let paramCurrentPrice =req.body.CurrentPrice

    PstockModel.updateOne({_id:paramuserId},{portfolio:paramportfolio,stock:paramstock,qty:paramqty,purchaseDate:parampurchaseDate,investPrice:paraminvestPrice,CurrentPrice:paramCurrentPrice},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
}