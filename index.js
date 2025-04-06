const express = require("express")
const app=express();

require("dotenv").config()
const PORT  = process.env.PORT || 5000


app.use(express.json()) 
const fileupload = require("express-fileupload")
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp'
}));

const db = require("./config/database");
db.dbConnect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnection();

const upload = require("./routes/file_uploading_routes");
app.use("/api/v1/upload",upload);

app.listen(PORT , () =>{
    console.log(`App is runnig at ${PORT} number`);
})