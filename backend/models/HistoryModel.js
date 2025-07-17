const mongoose=require('mongoose');

const History=new mongoose.Schema({
     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    data:Object,
    fileName:String,
    uploadDate:{type:Date,default:Date.now},
    xKey:String,
    yKey:String,
    chartType:String,

});
module.exports=mongoose.model('HistoryModel',History);