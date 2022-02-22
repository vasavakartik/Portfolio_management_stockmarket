const mongoose = require("mongoose")

let StockSchema =  new mongoose.Schema({

    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company"
    },
    isActive:{
        type:String
    },
    Name:{
        type:String
    },
  
    buySaleSignal:{
        type:String
    },
 
})

let StockModel =  mongoose.model("stock",StockSchema)
module.exports = StockModel