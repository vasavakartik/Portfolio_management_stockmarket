const mongoose = require("mongoose")

let PortSchema =  new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    creationDate:{
        type:Date
    },
    isActive:{
        type:String
    },
    isDefault:{
        type:String
    },
    portfolioName:{
        type:String
    },
    portfolioScore:{
        type:Number
    }
})


let PortModel = mongoose.model("portfolio",PortSchema)

module.exports=PortModel