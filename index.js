const express = require("express")
const mongoose =  require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController =  require("./controller/user-controller")
const subcriptionController =  require("./controller/subcription-controller")
const companyController = require("./controller/company-controller")
const StockController =  require("./controller/stock-controller")
const Feedbackcontroller = require("./controller/feedback-controller")
const WatchlistController =  require("./controller/watchlist-controller")
const portfolioController =  require("./controller/portfolio-controller")
const UserPortStock = require("./controller/userportstock-controller")
const AlertController=require("./controller/alert-controller")
const NotiController =  require("./controller/Noti-controller")
const PayController = require("./controller/pay-controller")
const ResearchController=require("./controller/research-controller")
const loginController = require("./controller/login-controller")
//middle ware
const app = express()
var cors = require('cors')
app.use(cors())
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


//comp
app.post("/comp",companyController.addCompany)
app.get ("/comp",companyController.displayComp)
app.delete("/comp/:userId",companyController.deleteComp)
app.put("/comp",companyController.updateComp)

//Stock
app.post("/stock",StockController.addStock)
app.get("/stock",StockController.displayStock)
app.delete("/stock/:userId",StockController.deleteStock)
app.put("/stock",StockController.updateStock)

//feedback
app.post("/feedback",Feedbackcontroller.addfeedback)
app.get("/feedback",Feedbackcontroller.displayfeedback)
app.delete("/feedback/:userId",Feedbackcontroller.deletefeedback)
app.put("/feedback",Feedbackcontroller.updateFeedback)

//watchlist
app.post("/watchlist",WatchlistController.addwatchlist)
app.get("/watchlist",WatchlistController.displaylist)
app.delete("/watchlist/:userId",WatchlistController.deletelist)
app.put("/watchlist",WatchlistController.updatelist)

//portfolio
app.post("/portfolio",portfolioController.addPort)
app.get("/portfolio",portfolioController.displayport)
app.delete("/portfolio/:userId",portfolioController.deleteport)
app.put("/portfolio",portfolioController.updateport)

//portuserstock
app.post("/userportstock",UserPortStock.addupstock)
app.get("/userportstock",UserPortStock.displayusport)
app.delete("/userportstock/:userId",UserPortStock.deleteusport)
app.put("/userportstock",UserPortStock.updateport)

//alert
app.post("/alert",AlertController.addAlert)
app.get("/alert",AlertController.displayalert)
app.delete("/alert/:userId",AlertController.deletealert)
app.put("/alert",AlertController.updatealert)

//notification
app.post("/notification",NotiController.Notadd)
app.get("/notification",NotiController.displaynoti)
app.delete("/notification/:userId",NotiController.deletenoti)
app.put("/notification",NotiController.updatenoti)


//paydetails
app.post("/pay",PayController.payadd)
app.get("/pay",PayController.displaypay)
app.delete("/pay/:userId",PayController.deletepay)
app.put("/pay",PayController.updatepay)

//login
app.post("/log",loginController.addlog)

//reserach
app.post("/research",ResearchController.researchadd)
app.get("/research",ResearchController.displayresearch)
app.delete("/research/:userId",ResearchController.deleteresearch)
app.put("/research",ResearchController.updateresearch)
//server 

app.listen(4000,function(){
    console.log("server started on 4000");  
  })

