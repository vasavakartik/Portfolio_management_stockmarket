const mongoose = require("mongoose")

let PstockSchema =  new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    portfolio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"portfolio"
    },
    stock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    },
    qty:{
        type:Number
    },
    purchaseDate:{
        type:Date
    },
    investPrice:{
        type:Number
    },
    CurrentPrice:{
        type:Number
    }
})

let PstockModel = mongoose.model("userportstock",PstockSchema)

module.exports = PstockModel