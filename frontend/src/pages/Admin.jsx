import '../pages/Admin.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
  <header className="navbar">
    <div className="nav-left">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-app" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10V7a8 8 0 10-16 0v5c0 5.5 8 10 8 10z" />
      </svg>
      <span className="logo-text">Admin Dashboard</span>
    </div>
    <div className="nav-right">
      <span className="user-welcome">Welcome, geniusbackbencher98</span>
      <button className="logout-btn">
        <svg xmlns="http://www.w3.org/2000/svg" className="logout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
        </svg>
        Logout
      </button>
    </div>
  </header>
  <main className="container">
    <div className="stats-row">
      <div className="stat-card">
        <div className="stat-header">
          Total Users
          <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-8a4 4 0 11-8 0 4 4 0 018 0zm6 4a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        </div>
        <div className="stat-main">3</div>
        <div className="stat-desc">0 active this week</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          Total Uploads
          <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width={20} height={14} x={2} y={5} rx={2} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3-3 3-3-3" />
          </svg>
        </div>
        <div className="stat-main">5</div>
        <div className="stat-desc">Excel files processed</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          Charts Created
          <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
            <circle cx={12} cy={7} r={4} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="stat-main">2</div>
        <div className="stat-desc">Visualizations generated</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          Platform Usage
          <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
          </svg>
        </div>
        <div className="stat-main"><span className="usage-pct">40%</span></div>
        <div className="stat-desc">Upload to chart ratio</div>
      </div>
    </div>
    <nav className="tabs-nav">
      <Link to='/admin' className="tab-btn ">User Management</Link>
      <Link to='/admin/activity' className="tab-btn">Upload Activity</Link>
    </nav>
    <Outlet/>
  </main>
 
</div>
  )
}

export default Admin