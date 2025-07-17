const xlsx=require('xlsx');
const YourModel=require('../models/YourModel');
exports.handleUpload=async(req,res)=>{
   try{ if(!req.file)return res.status(400).json({message:'No file uploaded'});
    const workbook=xlsx.readFile(req.file.path);
    const sheetName=workbook.SheetNames[0];
    const data=xlsx.utils.sheet_to_json(workbook.Sheets[sheetName])
    const inserted=await YourModel.insertMany(data);
    res.status(200).json({ message: 'File processed', insertedCount: inserted.length });
}
catch(err){
    res.status(500).json({error:err.message});
}};