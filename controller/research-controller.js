const ReModel = require("../model/research-model")

module.exports.researchadd = function(req ,res){
    let stock = req.body.stock
    let buyPrice = req .body.buyPrice
    let targetPrice = req.body.targetPrice
 
    

    let research=  new ReModel({
        stock:stock,
        buyPrice:buyPrice,
        targetPrice:targetPrice,
        
    })
    research.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.displayresearch = function(req ,res){
    ReModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteresearch = function(req ,res){
    let userId = req.params.userId 

    ReModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}
module.exports.updateresearch = function(req,res){
    let paramuserId =req.body.userId
    let paramstock =  req.body.stock
    let parambuyPrice = req.body.buyPrice
    let paramtargetPrice =  req.body.targetPrice
    

    ReModel.updateOne({_id:paramuserId},{stock:paramstock,buyPrice:parambuyPrice,targetPrice:paramtargetPrice},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
    
   

}
