const mongoose = require("mongoose")

const SubSchema = new mongoose.Schema({
   userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
       

    },
    subscribeDate:{
        type:Date

    },
    expdate:{
        type:Date
    },
    advRenewdate:{
        type:Date
    },
    isAdvRenew:{
        type:String
    }
})

const subsModel =  mongoose.model("subcription",SubSchema)
module.exports = subsModel