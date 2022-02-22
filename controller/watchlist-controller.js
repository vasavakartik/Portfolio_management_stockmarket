const WatchModel =  require("../model/watchlist-model")

module.exports.addwatchlist = function(req ,res){
    let Name=req.body.Name
    let Create =  req.body.Create
    let stock =  req.body.stock

    let watch = new WatchModel({
        Name:Name,
        Create:Create,
        stock:stock
    })
    watch.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.displaylist = function(req ,res){
    WatchModel.find().populate("stock").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletelist = function(req ,res){
    let userId = req.params.userId 

    WatchModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updatelist = function(req,res){
    let paramuserId = req.body.userId
    let paramName = req.body.Name
    let paramCreate = req.body.Create
    let paramstock= req.body.stock

    WatchModel.updateOne({_id:paramuserId},{Name:paramName,Create:paramCreate,stock:paramstock},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
}