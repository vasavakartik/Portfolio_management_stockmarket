const CompModel = require("../model/company-model")

module.exports.addCompany = function(req ,res){
   let CompanyName = req.body.CompanyName
   let Info = req.body.Info

   let comp = new CompModel({
       CompanyName:CompanyName,
       Info:Info
   })
   comp.save(function (err, data) {
    if (err) {
        res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
    } else {
        res.json({ msg: "signup done", data: data, status: 200 })//http status code 
    }
})
   
}

module.exports.displayComp =function(req ,res){

    CompModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })

}

module.exports.deleteComp = function(req , res){
    let userId = req.params.userId
  CompModel.deleteOne({_id:userId},function(err , data){
    if (err) {
        res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
    } else {
        res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
    }
  })
}

module.exports.updateComp = function(req,res){
    let paramuserId = req.body.userId
    let paramCompanyName = req.body.CompanyName
    let paramInfo = req.body.Info


    CompModel.updateOne({_id:paramuserId},{CompanyName:paramCompanyName,Info:paramInfo},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
    })
}