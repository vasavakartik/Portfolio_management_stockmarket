const mongoose = require("mongoose")

const SubSchema = new mongoose.Schema({
   userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
       

    },
    subscribeDate:{
        type:String

    },
    expdate:{
        type:String
    },
    advRenewdate:{
        type:String
    },
    isAdvRenew:{
        type:String
    }
})

const subsModel =  mongoose.model("subcription",SubSchema)
module.exports = subsModel