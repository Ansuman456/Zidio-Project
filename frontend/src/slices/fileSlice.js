import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
    fileData: null,
    chartData: null,
}
const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setFile: (state,action)=>{
            state.fileData = action.payload;
        },
        setChartData: (state,action)=>{
            state.chartData = action.payload;
        }
}});

export const {setFile,setChartData} = fileSlice.actions;
export default fileSlice.reducer;