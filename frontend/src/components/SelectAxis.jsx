 import { useState,useEffect } from "react";
import "../components/SelectAxis.css";
// import chartData from "../sampledata/columndata";
 import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

const SelectAxis = () => {
  const fileData = useSelector((state)=> state.file.fileData);
  const chartData = useSelector((state)=> state.file.chartData);
 console.log(fileData);
 console.log(chartData);


  const keysarray = Object.keys(chartData);
  const [chartName, setChartName] = useState("");
  const [xaxis, SetXaxis] = useState("");
  const [yaxis, SetYaxis] = useState("");
  const [isnum, setIsnum] = useState(true);
  const [activechart, setActive] = useState(null);
  const [scattercheck,setCheck] = useState(true);
  const [ischecked, setIschecked] = useState(false);
    
 

  function handleYchange(e) {
    const columnName = e.target.value;
    const columnValues = chartData[columnName];

    const hasNonNumeric = columnValues.some(
      (val) => typeof val !== "number" || isNaN(val)
    );

    if (hasNonNumeric) {
      setIsnum(false);
    } else setIsnum(true);

    SetYaxis(columnName);
  }

function handlescatter() {
  setActive("scatter");
  const xValues = chartData[xaxis];
  const yValues = chartData[yaxis];

  const xInvalid = xValues?.some(val => typeof val !== "number" || isNaN(val));
  const yInvalid = yValues?.some(val => typeof val !== "number" || isNaN(val));

  if (xInvalid || yInvalid) {
    setCheck(false);
  } else {
    setCheck(true);
    
  }
}

  async function handlesubmit() {
    if (!xaxis || !yaxis || !activechart) {
      alert("please fill all the details");
      return;
    }

    const xData = chartData[xaxis];
    const yData = chartData[yaxis];
    const token = localStorage.getItem("token");

    try {
      const finaldata = {
        ChartName: chartName,
        Xname: xaxis,
        Yname: yaxis,
        Xaxis: xData,
        Yaxis: yData,
        Charttype: activechart,
        fileId: fileData._id, // 🔁 Replace with actual fileId
      };
      const response = await axios.post(
        "https://zidio-project-aidj.onrender.com/savecharts",
        finaldata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Server response:", response.data);
      toast("Chart Generation Successful",{autoClose: 2000});
      setActive(null);
      setChartName("");
      SetXaxis("");
      SetYaxis("");
      console.log("successfully parsed and saved")
    } 
    catch (error) {
      console.error("Error sending data:", error);
      toast("Error in Generationg the chart",{autoClose: 2000});
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
            <span className="filename-main">{fileData.fileName}</span>
            <span className="file-detail-meta">({fileData.noOfRow} rows, {fileData.noOfColumn} columns)</span>
          </div>
        </div>
        <br />
        <div className="file-cols">
          <span className="key">Columns: </span>
          {fileData.colArr.map((element,index) => {
              return <span key={index}>{element}, </span>
            })}
           

        </div>
      </div>
      {/* CONFIGURE CHART SECTION */}

      <div className="config-section">
        <h2>Configure Chart</h2>
        <p>Select columns for your chart axes and choose visualization type</p>
        <div className="chartname">
          <label htmlFor="chartname" className="config-label">
            Chart Name
          </label>
          <input
            placeholder="Enter Your Chart's Name"
            className="chart-name-input"
            type="text"
            value={chartName}
            onChange={(e) => {
              setChartName(e.target.value);
            }}
          />
        </div>
        <div className="config-row">
          <div className="config-col">
            <label className="config-label" htmlFor="xaxis">
              X-Axis Column
            </label>
            <select
              id="xaxis"
              className="config-select"
              value={xaxis}
              onChange={(e) => {SetXaxis(e.target.value);handleXchange}}
            >
              <option value="">Select X-axis column</option>
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
              value={yaxis}
              onChange={(e) => handleYchange(e)}
            >
              <option value="">Select Y-axis column</option>
              {keysarray
                .filter((option) => {
                  return option !== xaxis;
                })
                .map((option) => {
                  return <option key={option}>{option}</option>;
                })}
            </select>
            <span className={`${isnum ? "dissapear" : "appear"}`}>
              Y axis Should only contain numerical values
            </span>
          </div>
        </div>
        <div className="chart-type-section">
          <label className="config-label">Chart Type</label>
          <br />
          <br />
          <div className="chart-types-row">
            <button
              className={`chart-type-btn ${
                activechart === "bar" ? "active" : ""
              }`}
              onClick={() => {setActive("bar");setCheck(true)}}
            >
              <i className="fa-solid fa-chart-column" />
              Bar Chart
            </button>
            <button
              className={`chart-type-btn ${
                activechart === "line" ? "active" : ""
              }`}
              onClick={() => {setActive("line");setCheck(true)}}
            >
              <i className="fa-solid fa-chart-line" />
              Line Chart
            </button>
            <button
              className={`chart-type-btn ${
                activechart === "pie" ? "active" : ""
              }`}
              onClick={() => {setActive("pie");setCheck(true)}}
            >
              <i className="fa-solid fa-chart-pie" />
              Pie Chart
            </button>
              <button
              className={`chart-type-btn ${
                activechart === "scatter" ? "active" : ""
              }`}
              onClick={
               handlescatter
              }
            >
              <i class="fa-solid fa-chart-line"></i>
              Scatter Plot
              <span className={`${scattercheck ? "dissapear" : "appear"}`}>
              Both X and Y axis should have numeric values for scatter graph
            </span>
            </button>
          </div>
          
        </div>
        <button
          className={`generate-btn ${isnum ? "" : "restrict-submit"} ${scattercheck ? "" : "restrict-submit"}`}
          onClick={handlesubmit}
        >
          Generate Chart
        </button>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default SelectAxis;