const express = require("express")
const mongoose =  require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController =  require("./controller/user-controller")
const subcriptionController =  require("./controller/subcription-controller")

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

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateuser)


//subs
app.post("/subs",subcriptionController.addData)
app.get("/subs",subcriptionController.displaydata)
app.delete("/subs/:userId",subcriptionController.deletedata)
app.put("/subs",subcriptionController.updatedata)

//server 

app.listen(3000,function(){
    console.log("server started on 3000");  
  })

