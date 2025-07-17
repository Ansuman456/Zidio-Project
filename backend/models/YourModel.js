const mongoose=require('mongoose');
const YourSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});
module.exports=mongoose.model('YourModel',YourSchema);