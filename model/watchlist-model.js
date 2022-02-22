const mongoose = require("mongoose")

let WatchSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Create:{
        type:String
    }
})

let WatchModel =  mongoose.model("watchlist",WatchSchema)
 
module.exports = WatchModel