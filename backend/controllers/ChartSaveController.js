import Chart from "../models/ChartModel.js";


const savecharts = async (req,res)=>{

    try {
        console.log("hi");
        
        const data = req.body;
        console.log(data);
        console.log(req.userData);
        console.log(req.userData.userData.user);
        
        
        const newdata = {...data,userId:req.userData.userData.user}
        console.log(newdata);
        
        const newChart = new Chart(newdata);
        const response = await newChart.save();
        res.status(200).json(response);
    } catch (error) {
        console.log("Error saving data:", error);
        res.status(500).json(error);
    }


}
export default savecharts;