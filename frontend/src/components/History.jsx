import '../components/History.css'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const History = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("default");
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('https://zidio-project-aidj.onrender.com/history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        console.log(response); 
        setHistory(response.data);
        setLoading(false);
        }catch(err){
          console.log(err);
          console.log(err.response.data.message)
          setError( err.response.data.message)
        }
    };
    fetchData();
  }, []);

  const handleDelete = async (fileId) => {
    const token = localStorage.getItem("token");
    try {
      const responce = await axios.delete(`https://zidio-project-aidj.onrender.com/history/${fileId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(responce)

      // Remove it from frontend list
      setHistory((prev) => prev.filter((file) => file._id !== fileId));
      toast("File delete Successfull",{autoClose: 1000});

    } catch (error) {
      console.error("Error deleting chart:", error);
    }
  };
  
  
  if (error=="Unauthorized, please login with correct credentials or create an account") return <div> <p className='loading'>Unauthorized or token expired, please login with correct credentials or create an account</p> 
   <button className="logout-btn">
        <Link to="/login">Login</Link>
      </button></div> 
  if (loading) return <p className='loading'>Loading...</p>;


  return (
    <div className="history-section-outer">
  <div className="history-section-title">Upload History</div>
  <div className="history-section-desc">
    View and manage your previous uploads and charts
  </div>
  {/* Repeated card for each history item */}
  {history.map((element, index, array) => {
   return <div className="history-card">
   <div className="card-left">
     <span className="file-icon">
       <svg fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 28 28">
         <rect x={5} y={5} width={18} height={18} rx={4} fill="#e6f8ee" />
         <path d="M9 10h10M9 14h6M9 18h8" stroke="#22b35c" strokeWidth={2} strokeLinecap="round" />
       </svg>
     </span>
     <div className="file-info">
       <div className="file-name">{element.fileName}</div>
       <div className="file-meta">
         <span>
           <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 20 20"><circle cx={10} cy={10} r={8} /><path d="M10 6v4l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
           {new Date(element.createdAt).toISOString().slice(0, 10)}
         </span>
         <span>
           <svg fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 20 20"><rect x={4} y={8} width={12} height={7} rx={2} /><rect x={7} y={4} width={6} height={4} rx={1} /></svg>
           {element.noOfRow} rows
         </span>
       </div>
       <div className="file-tags-row">
        {element.colArr.map((element, index, array) => {
            return <span className="file-tag">{element}</span>
        })}
       </div>
     </div>
   </div>
   <div className="card-actions">
     <button className="delete-btn" title="Delete" onClick={()=>handleDelete(element._id)}>
       <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><line x1={6} y1={6} x2={14} y2={14} /><line x1={14} y1={6} x2={6} y2={14} /></svg>
     </button>
   </div>
 </div>
  })}
  



  {/* Duplicate card as shown in the screenshot: */}
  {/* <div className="history-card">
    <div className="card-left">
      <span className="file-icon">
        <svg fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 28 28">
          <rect x={5} y={5} width={18} height={18} rx={4} fill="#e6f8ee" />
          <path d="M9 10h10M9 14h6M9 18h8" stroke="#22b35c" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </span>
      <div className="file-info">
        <div className="file-name">file_example_XLS_100.xls</div>
        <div className="file-meta">
          <span>
            <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 20 20"><circle cx={10} cy={10} r={8} /><path d="M10 6v4l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            7/3/2025
          </span>
          <span>
            <svg fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 20 20"><rect x={4} y={8} width={12} height={7} rx={2} /><rect x={7} y={4} width={6} height={4} rx={1} /></svg>
            100 rows
          </span>
        </div>
        <div className="file-tags-row">
          <span className="file-tag primary">0</span>
          <span className="file-tag">First Name</span>
          <span className="file-tag">Last Name</span>
          <span className="file-tag">Gender</span>
          <span className="file-tag">Country</span>
          <span className="file-tag">+3 more</span>
        </div>
      </div>
    </div>
    <div className="card-actions">
      <button className="action-btn">
        <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 22 22"><circle cx={11} cy={11} r={8} /><circle cx={11} cy={11} r={3} /><path d="M16 11h.01" /></svg>
        View
      </button>
      <button className="delete-btn" title="Delete">
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20"><line x1={6} y1={6} x2={14} y2={14} /><line x1={14} y1={6} x2={6} y2={14} /></svg>
      </button>
    </div>
  </div> */}
  <ToastContainer position="bottom-right" />
</div>
  )
}

export default History