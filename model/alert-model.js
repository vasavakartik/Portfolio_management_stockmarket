const mongoose =  require("mongoose")

let AlertSchema =  new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    stock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"stock"
    },
    price:{
        type:Number

    },
    alertType:{
        type:Number
    }
})


let AlertModel = mongoose.model("alert" ,AlertSchema)

module.exports=AlertModel