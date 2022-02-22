const mongoose = require("mongoose")

let WatchSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Create:{
        type:String
  
    },
    stock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    }
})

let WatchModel =  mongoose.model("watchlist",WatchSchema)
 
module.exports = WatchModel