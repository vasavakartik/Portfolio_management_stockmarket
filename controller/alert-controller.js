const AlertModel= require("../model/alert-model")

module.exports.addAlert = function(req,res){
    let user=req.body.user
    let stock=req.body.stock
    let price = req.body.price
    let alertType = req.body.alertType


    let alert = new AlertModel({
        user:user,
        stock:stock,
        price:price,
        alertType:alertType


    })

    alert.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.displayalert = function(req ,res){
    AlertModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletealert = function(req ,res){
    let userId = req.params.userId 

    AlertModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updatealert = function(req,res){
    let paramuserId =req.body.userId
    let paramuser =  req.body.user
    let paramstock = req.body.stock
    let paramprice =  req.body.price
    let paramalertType =  req.body.alertType

    AlertModel.updateOne({_id:paramuserId},{user:paramuser,stock:paramstock,price:paramprice,alertType:paramalertType},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
    
   

}
