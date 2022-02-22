const PortModel = require("../model/portfolio-model")

module.exports.addPort = function(req,res){
    let user = req.body.user
    let creationDate = req.body.creationDate
    let isActive = req.body.isActive
    let isDefault = req.body.isDefault
    let portfolioName = req.body.portfolioName
    let portfolioScore =  req.body.portfolioScore

    let port = new PortModel({
        user:user,
        creationDate:creationDate,
        isActive:isActive,
        isDefault:isDefault,
        portfolioName:portfolioName,
        portfolioScore:portfolioScore
    })

    port.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.displayport = function(req ,res){
    PortModel.find().populate("user").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteport = function(req ,res){
    let userId = req.params.userId 

    PortModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateport = function(req ,res){
    let paramuserId =  req.body.userId
    let paramcreationDate =  req.body.creationDate
    let paramisActive =req.body.isActive
    let paramisDefault =  req.body.isDefault
    let paramportfolioName =  req.body.portfolioName
    let paramportfolioScore= req.body.portfolioScore

    PortModel.updateOne({_id:paramuserId},{creationDate:paramcreationDate,isActive:paramisActive,isDefault:paramisDefault,portfolioName:paramportfolioName,portfolioScore:paramportfolioScore},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
}