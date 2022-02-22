const { use } = require("bcrypt/promises")
const NotiModel =  require("../model/Noti-model")

module.exports.Notadd = function(req ,res){
    let user = req.body.user
    let type = req.body.type
    let content = req.body.content
    let isRead= req.body.isRead
    let date= req.body.date

    let noti = new NotiModel({
        user:user,
        type:type,
        content:content,
        isRead:isRead,
        date:date
    })
    noti.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.displaynoti = function(req ,res){
    NotiModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletenoti = function(req ,res){
    let userId = req.params.userId 

    NotiModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "list removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updatenoti = function(req,res){
    let paramuserId =req.body.userId
    let paramuser =  req.body.user
    let paramtype = req.body.type
    let paramcontent =  req.body.content
    let paramaisRead =  req.body.isRead
    let paramdate = req.body.date

    NotiModel.updateOne({_id:paramuserId},{user:paramuser,type:paramtype,content:paramcontent,isRead:paramaisRead,date:paramdate},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
    
   

}
