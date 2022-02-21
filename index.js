const express = require("express")
const mongoose =  require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")


//middle ware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database
mongoose.connect('mongodb://localhost:27017/port_mgmt',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//server 

app.listen(3000,function(){
    console.log("server started on 3000");  
  })

