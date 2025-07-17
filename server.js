require('dotenv').config(); 
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');
app.use(cors());


app.use(express.json());

const authRoutes=require('./backend/routes/authRoutes');
const adminRoutes = require('./backend/routes/adminRoutes');
const uploadRoutes = require('./backend/routes/uploadRoutes');
const dataRoutes = require('./backend/routes/dataRoutes');
const historyRoutes = require('./backend/routes/historyRoutes');
app.use('/api/history', historyRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api', dataRoutes);

app.use('/api/upload', uploadRoutes);

app.use('/api/auth',authRoutes)
console.log("Auth routes loaded.");

app.use('/api/admin', adminRoutes);




const PORT=5009;
const DB_PATH="mongodb+srv://wadgaonkarrutuja1:CuAdOgMxoyN8d4Rn@cluster0.lcy9hz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0CuAdOgMxoyN8d4Rn";

mongoose.connect(DB_PATH).then(()=>{
    console.log('Connected to Mongo');
    app.listen(PORT,()=>{
        console.log(`Server runnning on http://localhost:${PORT}`);
     
    })

}).catch(err=>{
    console.log('Error while connecting to Mongo:',err);
})

