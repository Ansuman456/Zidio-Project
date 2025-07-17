const express=require('express');
const router=express.Router();
const uploadController=require('../controllers/uploadController');
const multer=require('multer');
const HistoryModel = require('../models/HistoryModel');
const path=require('path');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    },
})
const fileFilter=(req,file,cb)=>{
    const ext=path.extname(file.originalname);
    if(ext!=='.xls' && ext!=='.xlsx'){
        return cb(new Error('Only Excel files are allowed'),false);
    }
        cb(null,true);
    };
    const upload=multer({storage,fileFilter});
    router.post('/upload',upload.single('file'),uploadController.handleUpload);

    module.exports=router;
    