import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://ansumanpadhy28:yTLaHRq4YTPmWF9k@myfirstcluster.prwirgl.mongodb.net/`, 
        {
          useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
}
export default connectDB