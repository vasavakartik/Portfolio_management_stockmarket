const loginModel = require("../model/login-model")

module.exports.addlog = function(req ,res){
   
    let email = req.body.email
    let password = req.body.password
    

    let log = new loginModel({
        email:email,
        password:password,
       
        
    })
    log.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}