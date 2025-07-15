import '../components/AdminManagement.css'

const AdminManagement = () => {
  return (
    <section className="user-mgmt-card">
      <h2>User Management</h2>
      <div className="user-mgmt-desc">Manage user accounts and permissions</div>
      <div className="user-mgmt-table-wrapper">
        <table className="user-mgmt-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Uploads</th>
              <th>Join Date</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="user-cell">
                  <div className="user-name">John Doe</div>
                  <div className="user-email">john.doe@example.com</div>
                </div>
              </td>
              <td>
                <span className="role-badge user-role">user</span>
              </td>
              <td>12</td>
              <td>1/15/2024</td>
              <td>1/20/2024</td>
              <td>
                <button className="table-btn make-admin">Make Admin</button>
                <button className="table-icon-btn" title="Delete User">
                  <svg className="table-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-cell">
                  <div className="user-name">Jane Smith</div>
                  <div className="user-email">jane.smith@example.com</div>
                </div>
              </td>
              <td>
                <span className="role-badge user-role">user</span>
              </td>
              <td>8</td>
              <td>1/10/2024</td>
              <td>1/19/2024</td>
              <td>
                <button className="table-btn make-admin">Make Admin</button>
                <button className="table-icon-btn" title="Delete User">
                  <svg className="table-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="user-cell">
                  <div className="user-name">Admin User</div>
                  <div className="user-email">admin@example.com</div>
                </div>
              </td>
              <td>
                <span className="role-badge admin-role">admin</span>
              </td>
              <td>5</td>
              <td>1/1/2024</td>
              <td>1/20/2024</td>
              <td>
                <button className="table-btn make-user">Make User</button>
                <button className="table-icon-btn" title="Delete User">
                  <svg className="table-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminManagement