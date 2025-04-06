const express = require ("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,imageReducerUpload} = require("../controllers/file_upload");

router.post("/imageUpload" , imageUpload);
router.post("/videoUpload" , videoUpload);
router.post("/imageReducerUpload",imageReducerUpload);
router.post("/localFileUpload",localFileUpload);

module.exports=router;
