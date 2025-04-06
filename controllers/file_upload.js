const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
    try {

        const file = req.files.file;
        console.log(file)

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        // This is a server path not the client path

        file.mv(path, (err) => {
            console.log(err);
        })

        res.json({
            success: true,
            message: "local file uploaded successfully",
        })

    } catch (error) {
        console.log(error)
    }
}

function isFileTypeSupported(type, supportedType) {
    return supportedType.includes(type);
}


async function uploadFileToCloudionary(file, folder,quality) {
    const options = { folder };
    options.resource_type = "auto";
    options.transformation = [{ quality }];
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.imageUpload = async (req, res) => {
    try {
        const { name, email, tags } = req.body;
        const file = req.files.imageFile;
        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                sucess: false,
                message: "File Type is not Supported",
            });
        }


        const response = await uploadFileToCloudionary(file, "Tushar" , 50);
        comsole.log(response)

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })
        console.log(fileData)

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image is successfullt uploaded in the cloudinary",
        });



    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess: false,
            message: "Something went Wrong during uploading an image"
        })
    }
}

exports.videoUpload = async (req, res) => {
    try {
        const { name, email, tags } = req.body;
        console.log(req.body)
        

        const file = req.files.videofile;
        console.log("FILES:", req.files);


        const supportedType = ["mp4", "mov"];
        const fileType = file.name.split(".").pop().toLowerCase();

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                sucess: false,
                message: "File Type is not Supported",
            });
        }

        const response = await uploadFileToCloudionary(file, "Tushar");

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        }) ;

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "video is successfully uploaded in the cloudinary",
        });




    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess: false,
            message: "Something went Wrong during uploading an video"
        })
    }
}

exports.imageReducerUpload = async (req, res) => {
    try {
        const { name, email, tags } = req.body;
        console.log(req.body)
        

        const file = req.files.imageReducer;
        console.log("FILES:", req.files);


        const supportedType = ["jpg", "jpeg" , "png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                sucess: false,
                message: "File Type is not Supported",
            });
        }

        const response = await uploadFileToCloudionary(file, "Tushar",70);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        }) ;

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "image reducer is successfully uploaded in the cloudinary",
        });




    } catch (error) {
        console.error(error);
        res.status(400).json({
            sucess: false,
            message: "Something went Wrong during uploading an reducer image"
        })
    }
}