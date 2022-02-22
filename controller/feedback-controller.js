const FeedModel = require("../model/feedback-model")

module.exports.addfeedback = function(req ,res){
    let user = req.body.user
    let userName = req.body.userName
    let feeds =  req.body.feeds

    let feed = new FeedModel({
        user:user,
        userName:userName,
        feeds:feeds

    })

    feed.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.displayfeedback =  function(req ,res){
    FeedModel.find().populate("user").exec (function(err , data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletefeedback =  function(req, res){
    let userId = req.params.userId
    
   FeedModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Stock removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateFeedback = function(req , res){
    let paramuserId =  req.body.userId
    let paramuserName =  req.body.userName
    let paramfeeds= req.body.feeds
    let paramuser =  req.body.user

    FeedModel.updateOne({_id:paramuserId},{userName:paramuserName,feeds:paramfeeds, user:paramuser},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
}