const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    },
})

module.exports = mongoose.model("File",fileSchema);
