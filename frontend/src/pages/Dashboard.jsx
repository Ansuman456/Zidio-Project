import '../pages/Dashboard.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("default");
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://localhost:3000/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        console.log(response.response);
        setLoading(false);
        }catch(err){
          console.log(err);
          console.log(err.response.data.message)
          setError( err.response.data.message)
        }
    };
    fetchData();
  }, []);
  
  console.log(error)
  if (error=="Unauthorized, please login with correct credentials or create an account") return <div> <p className='loading'>Unauthorized or token expired, please login with correct credentials or create an account</p> 
   <button className="logout-btn">
        <Link to="/login">Login</Link>
      </button></div> 
  if (loading) return <p className='loading'>Loading...</p>;

  const handlelogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  

  return (
    
    <div>
  {/* HEADER */}
  <div className="header">
    <div className="header-left">
      <span className="header-logo">
        {/* Chart SVG icon */}
        <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
          <rect x="2.5" y={15} width={3} height={5} rx="1.2" />
          <rect x="8.5" y={10} width={3} height={10} rx="1.2" />
          <rect x="14.5" y="5.5" width={3} height="14.5" rx="1.2" />
        </svg>
      </span>
      <span className="header-title">DataViz Pro</span>
    </div>
    <div className="header-right">
      <span className="header-welcome">Welcome, nskdjvbkjsdn</span>
      <button className="logout-btn" onClick={handlelogout}>
        {/* LoginOut SVG */}
        <svg fill="none" viewBox="0 0 20 20">
          <path d="M5.5 6V4A2.5 2.5 0 0 1 8 1.5h5A2.5 2.5 0 0 1 15.5 4v12A2.5 2.5 0 0 1 13 18.5H8A2.5 2.5 0 0 1 5.5 16v-2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12.5 10H3m0 0l2.2-2.2M3 10l2.2 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Logout
      </button>
    </div>
  </div>
  {/* END HEADER */}
 

  <div className="main">
    <div className="dashboard-title">Dashboard</div>
    <div className="dashboard-desc">
      Upload and analyze your Excel data with interactive visualizations
    </div>
    {/* Tabs */}
    <div className="tabs">
      <Link to='/dashboard' className="tab ">
        {/* Upload icon */}
        <svg fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 22 22">
          <path d="M11 16V4m0 0L7 8m4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x={4} y={16} width={14} height={3} rx="1.5" />
        </svg>
        Upload Data
      </Link>
      <Link to='/dashboard/history' className="tab">
        {/* History icon */}
        <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 22 22">
          <path d="M2.5 11a8.5 8.5 0 1 0 4-7.2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="2.5 4.5 7 3.8 6.2 8.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        History
      </Link>
      <Link to='/dashboard/chart-list' className="tab">
        {/* Chart icon */}
        <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 22 22">
          <rect x="3.5" y={14} width={3} height={5} rx="1.2" />
          <rect x="9.5" y={9} width={3} height={10} rx="1.2" />
          <rect x="15.5" y={4} width={3} height={15} rx="1.2" />
        </svg>
        Charts
      </Link>
    </div>
    <Outlet/>
  </div>
  

</div>  

  )
}

export default Dashboard