import Chart from "../models/ChartModel.js";


const GetCharts = async (req,res)=>{

    

    try {

    } catch (error) {
        console.log("Error while fetching charts:", error);
        res.status(500).json(error);
    }


}
export default savecharts;