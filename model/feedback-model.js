const mongoose = require("mongoose")

let FeedSchema =  new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    userName:{
        type:String
    },
    feeds:{
        type:String
    }
})

let FeedModel = mongoose.model("feedback",FeedSchema)

module.exports= FeedModel