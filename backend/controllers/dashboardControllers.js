const dashboardController = (req,res)=>{
    res.status(200).json({success:true, message:"authorized"})
}

export {dashboardController}