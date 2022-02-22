const mongoose = require("mongoose")

const CompSchema =  new mongoose.Schema({
        CompanyName:{
            type:String
        },
        Info:{
            type:String
        }

})

const CompModel = mongoose.model("company",CompSchema)

module.exports = CompModel