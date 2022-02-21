const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")


module.exports.addUser = function(req ,res){
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let address = req.body.address
    let email = req.body.email
    let password = req.body.password
    let phonenumber = req.body.phonenumber

    //encrypt 

    let encPassword = bcrypt.hashSync(password,10)

    let role = req.body.role

    let user = new UserModel({
        firstName:firstName,
        lastName:lastName,
        address:address,
        password:encPassword,
        email:email,
        phonenumber:phonenumber,
        role:role
    })
    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}

module.exports.getAllUsers = function (req, res) {

    UserModel.find.populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateuser = function(req,res){
    let userId = req.body.userId
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let address =req.body.address
    let password = req.body.password
    let email = req.body.email
    let phonenumber = req.body.phonenumber
    let role = req.body.role

    UserModel.updateOne({_id:userId},{firstName:firstName},{lastName:lastName},{address:address},{password:password},{email:email},{phonenumber:phonenumber},{role:role},function(err ,data){

        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated.",status:200,data:data})
        }
      
    })
}