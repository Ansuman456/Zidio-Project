import '../components/Chart.css'

const Chart = () => {
  return (
    <section class="dashboard-main">
      <div class="charts-list">
        <h2>Your Charts</h2>
        <div class="charts-desc">Select a chart to view and download</div>
        <div class="chart-card chart-selected">
          <div class="chart-type">bar</div>
          <button class="chart-trash-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="chart-trash-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="chart-filename">file_example_XLS_100.xls</div>
          <div class="chart-details">Gender vs Gender</div>
          <div class="chart-date">7/3/2025</div>
        </div>

        <div class="chart-card">
          <div class="chart-type">bar</div>
          <button class="chart-trash-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="chart-trash-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="chart-filename">file_example_XLS_100.xls</div>
          <div class="chart-details">Id vs Date</div>
          <div class="chart-date">7/3/2025</div>
        </div>
      </div>
      <div class="chart-view">
        <div class="chart-view-header">
          <div>
            <div class="chart-view-title">bar Chart</div>
            <div class="chart-view-desc">file_example_XLS_100.xls - Gender vs Gender</div>
          </div>
          <div class="chart-view-buttons">
            <button class="download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
              </svg>
              PNG
            </button>
            <button class="download-btn">
              <svg xmlns="http://www.w3.org/2000/svg" class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
              </svg>
              PDF
            </button>
          </div>
        </div>
        <div class="chart-area">
            {/* chart would render here */}
        </div>
      </div>
    </section>
  )
}

export default Chart