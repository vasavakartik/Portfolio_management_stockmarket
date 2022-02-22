const mongoose = require("mongoose")

let FeedSchema =  new mongoose.Schema({
    user:{
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