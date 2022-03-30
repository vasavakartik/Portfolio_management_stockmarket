const mongoose =  require("mongoose")


let LoginSchema = new mongoose.Schema({
    
  password:{
    type:String
} ,
email:{
   type:String
}, 
})

let loginModel = mongoose.model("login" ,LoginSchema)

module.exports=loginModel