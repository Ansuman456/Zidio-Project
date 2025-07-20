import '../pages/Admin.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("default");
  const [stat, setStat] = useState({})
  const [name,setName] = useState('')
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://localhost:3000/admin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        console.log(response); 
        setStat({
          "totalUsers": response.data.totalUsers,
          "totalFiles": response.data.totalUploads,
          "totalCharts": response.data.chartUsage,
        })
        setName(response.data.name)
        console.log(stat)
        setLoading(false);
        }catch(err){
          console.log(err);
          console.log(err.response.data.message)
          setError( err.response.data.message)
        }
    };
    fetchData();
  }, []);

  if (error=="Unauthorized, please login with correct credentials or create an account") return <div> <p className='loading'>{error} or token expired, please login with correct credentials or create an account</p> 
   <button className="logout-btn">
        <Link to="/login">Login</Link>
      </button></div> 

    if(error=='You are not authorized to access this page') return <div><p>You are not authorized to access this page</p></div>

  if (loading) return <p className='loading'>Loading...</p>;

  const handlelogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }


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
      <span className="user-welcome">Welcome, {name}</span>
      <button className="logout-btn" onClick={handlelogout}>
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
        <div className="stat-main">{stat.totalUsers}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          Total Uploads
          <svg className="stat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width={20} height={14} x={2} y={5} rx={2} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3-3 3-3-3" />
          </svg>
        </div>
        <div className="stat-main">{stat.totalFiles}</div>
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
        <div className="stat-main">{stat.totalCharts}</div>
        <div className="stat-desc">Visualizations generated</div>
      </div>
    </div>
    {/* <nav className="tabs-nav">
      <Link to='/admin' className="tab-btn ">User Management</Link>
      <Link to='/admin/activity' className="tab-btn">Upload Activity</Link>
    </nav> */}
    <Outlet/>
  </main>
 
</div>
  )
}

export default Admin