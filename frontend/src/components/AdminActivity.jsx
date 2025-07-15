import '../components/AdminActivity.css'

const AdminActivity = () => {
  return (
    <div>
    <div className="upload-activity-section">
      <div className="upload-header">Upload Activity</div>
      <div className="upload-desc">
        Monitor file uploads and data processing activity
      </div>
      <table className="upload-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>User</th>
            <th>Upload Date</th>
            <th>Data Points</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i className="fa-regular fa-file-excel file-icon" />sales_data_2024.xlsx</td>
            <td>john.doe@example.com</td>
            <td>1/20/2024</td>
            <td>1,500 rows</td>
            <td><span className="badge-processed">Processed</span></td>
          </tr>
          <tr>
            <td><i className="fa-regular fa-file-excel file-icon" />customer_analytics.xlsx</td>
            <td>jane.smith@example.com</td>
            <td>1/19/2024</td>
            <td>800 rows</td>
            <td><span className="badge-processed">Processed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  )
}

export default AdminActivity
