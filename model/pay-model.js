const mongoose = require("mongoose")

let Payschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    transaction:{
        type:String
    },
    amount:{
        type:Number
    },
    transactionDate:{
        type:Date
    }
})

let PayModel =   mongoose.model("pay",Payschema)

module.exports = PayModel