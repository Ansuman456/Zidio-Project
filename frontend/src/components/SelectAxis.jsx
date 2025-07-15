import '../components/SelectAxis.css'

const SelectAxis = () => {
  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
  <div className="upload-section">
    <h2>Upload Excel File</h2>
    <p>Upload your Excel file (.xls, .xlsx) to start creating visualizations</p>
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
      <span className="key">Columns:</span> 0, First Name, Last Name, Gender, Country, Age, Date, Id
    </div>
  </div>
  {/* CONFIGURE CHART SECTION */}
  <div className="config-section">
    <h2>Configure Chart</h2>
    <p>Select columns for your chart axes and choose visualization type</p>
    <div className="config-row">
      <div className="config-col">
        <label className="config-label" htmlFor="xaxis">X-Axis Column</label>
        <select id="xaxis" className="config-select">
          <option>Select X-axis column</option>
        </select>
      </div>
      <div className="config-col">
        <label className="config-label" htmlFor="yaxis">Y-Axis Column</label>
        <select id="yaxis" className="config-select">
          <option>Select Y-axis column</option>
        </select>
      </div>
    </div>
    <div className="chart-type-section">
      <label className="config-label">Chart Type</label>
      <br />
      <br />
      <div className="chart-types-row">
        <button className="chart-type-btn active">
          <i className="fa-solid fa-chart-column" />
          Bar Chart
        </button>
        <button className="chart-type-btn">
          <i className="fa-solid fa-chart-line" />
          Line Chart
        </button>
        <button className="chart-type-btn">
          <i className="fa-solid fa-chart-pie" />
          Pie Chart
        </button>
      </div>
      <div className="chart-types-row">
        <button className="chart-type-btn">
        <i class="fa-solid fa-chart-line"></i>
          Scatter Plot
        </button>
        <button className="chart-type-btn">
          <i className="fa-solid fa-braille" />
          3D Scatter
        </button>
        <div style={{"-webkit-flex":"1","-ms-flex":"1","flex":"1"}} />
      </div>
    </div>
    <button className="generate-btn">Generate Chart</button>
  </div>
</div>
  )
}

export default SelectAxis