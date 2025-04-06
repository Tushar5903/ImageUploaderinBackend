const mongoose = require("mongoose")

require("dotenv").config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABSE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("database is successgully connected"))
    .catch((error)=>{
        console.log("Issue in Database Connection");
        console.log(error);
        process.exit(1);
    }); 
}