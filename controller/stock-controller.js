const StockModel =  require("../model/stock-model")

module.exports.addStock =  function(req ,res){
    let isActive = req.body.isActive
    let Name = req.body.Name
    let company =  req.body.company
    let buySaleSignal =  req.body.buySaleSignal

    let Stock = new StockModel({
        isActive:isActive,
        Name:Name,
        company:company,
        buySaleSignal:buySaleSignal
    })

    Stock.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.displayStock = function(req ,res){
    StockModel.find().populate("company").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteStock = function(req ,res){
    let userId = req.params.userId 

    StockModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Stock removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateStock =  function(req ,res){
    let paramuserId=req.body.userId
    let paramisActive =  req.body.isActive
    let paramName =  req.body.Name
    let paramcompany = req.body.company
    let parambuySaleSignal = req.body.buySaleSignal

    StockModel.updateOne({_id:paramuserId},{isActive:paramisActive,Name:paramName,company:paramcompany,buySaleSignal:parambuySaleSignal},function(err , data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
      
    })

    }