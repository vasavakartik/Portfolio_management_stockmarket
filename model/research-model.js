const mongoose = require("mongoose")

let ReSchema =  new mongoose.Schema({
    stock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    },
    buyPrice:{
        type:Number
    },
    targetPrice:{
        type:Number
    }
})

let ReModel =  mongoose.model("research",ReSchema)

module.exports= ReModel