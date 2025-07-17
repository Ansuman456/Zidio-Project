import { useState } from "react";
import "../components/SelectAxis.css";
import columnWiseData from "../sampledata/columndata";
import axios from 'axios';

const SelectAxis = () => {
  const keysarray = Object.keys(columnWiseData);
  const [xaxis, SetXaxis] = useState("");
  const [yaxis, SetYaxis] = useState("");
  const [isnum,setIsnum] = useState(true);
  const [activechart,setActive] = useState(null);

 function  handleYchange(e) {
  const columnName = e.target.value;
  const columnValues = columnWiseData[columnName];

  const hasNonNumeric = columnValues.some(
    (val) => typeof val !== "number" || isNaN(val)
  );

  if (hasNonNumeric) {
     setIsnum(false);
  }

  else setIsnum(true);

  SetYaxis(columnName);
}


async function handlesubmit(){

    if(!xaxis||!yaxis||!activechart){
      alert("please fill all the details");
      return;
    }

      const xData = columnWiseData[xaxis];
  const yData = columnWiseData[yaxis];
  const token = localStorage.getItem("token");



  try {
       const finaldata = {
      Xaxis: xData,
      Yaxis: yData,
      Charttype: activechart,
      fileId: "64e1a1a7f3d1b4b4a7c9e123",  // 🔁 Replace with actual fileId
      
    };
    const response = await axios.post('http://localhost:3000/savecharts',finaldata,
     {  headers: {
    Authorization: `Bearer ${token}`,
  },}
     );

    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
  

}
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      ></link>
      <div className="upload-section">
        <h2>Upload Excel File</h2>
        <p>
          Upload your Excel file (.xls, .xlsx) to start creating visualizations
        </p>
        <div className="upload-file-box">
          <div className="upload-file-details">
            <i className="fa-regular fa-file-excel file-icon" />
            <span className="filename-main">file_example_XLS_100.xls</span>
            <span className="file-detail-meta">(100 rows, 8 columns)</span>
          </div>
          <button className="clear-btn">
            <i className="fa-solid fa-xmark" /> Clear
          </button>
        </div>
        <br />
        <div className="file-cols">
          <span className="key">Columns:</span> 0, First Name, Last Name,
          Gender, Country, Age, Date, Id
        </div>
      </div>
      {/* CONFIGURE CHART SECTION */}
      <div className="config-section">
        <h2>Configure Chart</h2>
        <p>Select columns for your chart axes and choose visualization type</p>
        <div className="config-row">
          <div className="config-col">
            <label className="config-label" htmlFor="xaxis">
              X-Axis Column
            </label>
            <select
              id="xaxis"
              className="config-select"
              onChange={(e) => SetXaxis(e.target.value)}
            >
              <option>Select X-axis column</option>
              {keysarray
                .filter((option) => {
                  return option !== yaxis;
                })
                .map((option) => {
                  return <option key={option}>{option}</option>;
                })}
            </select>
          </div>
          <div className="config-col">
            <label className="config-label" htmlFor="yaxis">
              Y-Axis Column
            </label>
            <select
              id="yaxis"
              className="config-select"
              onChange={(e)=>handleYchange(e)}
            >
              <option>Select Y-axis column</option>
              {keysarray
                .filter((option) => {
                  return option !== xaxis;
                })
                .map((option) => {
                  return <option key={option} >{option}</option>;
                })}
            </select>
            <span className={`${isnum? 'dissapear':'appear'}`}>Y axis Should only contain numerical values</span>
          </div>
        </div>
        <div className="chart-type-section">
          <label className="config-label">Chart Type</label>
          <br />
          <br />
          <div className="chart-types-row">
            <button className={`chart-type-btn ${(activechart==='bar'?'active':'')}`} onClick={()=>setActive("bar")}>
              <i className="fa-solid fa-chart-column" />
              Bar Chart
            </button>
            <button className={`chart-type-btn ${(activechart==='line'?'active':'')}`} onClick={()=>setActive("line")}>
              <i className="fa-solid fa-chart-line" />
              Line Chart
            </button>
            <button className={`chart-type-btn ${(activechart==='pie'?'active':'')}`} onClick={()=>setActive("pie")}>
              <i className="fa-solid fa-chart-pie" />
              Pie Chart
            </button>
          </div>
          <div className="chart-types-row" >
            <button className={`chart-type-btn ${(activechart==='scatter'?'active':'')}`} onClick={()=>setActive("scatter")}>
              <i class="fa-solid fa-chart-line"></i>
              Scatter Plot
            </button>
            <button className={`chart-type-btn ${(activechart==='threescatter'?'active':'')}`} onClick={()=>setActive("threescatter")}>
              <i className="fa-solid fa-braille" />
              3D Scatter
            </button>
            <div style={{ "-webkit-flex": "1", "-ms-flex": "1", flex: "1" }} />
          </div>
        </div>
        <button className={`generate-btn ${isnum? '':'restrict-submit'}`} onClick={handlesubmit}>Generate Chart</button>
      </div>
    </div>
  );
};

export default SelectAxis;
