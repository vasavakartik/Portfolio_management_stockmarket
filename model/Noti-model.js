const mongoose = require("mongoose")

let NotiSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    type:{
        type:Number
    },
    content:{
        type:String
    },
    isRead:{
        type:Number
    },
    date:{
        type:Date
    }
})

let NotiModel = mongoose.model("Noti",NotiSchema)

module.exports=NotiModel