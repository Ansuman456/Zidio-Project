import '../components/AdminManagement.css'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';


const AdminManagement = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("default");
  const [users, setUsers] = useState([])
  const token = localStorage.getItem('token');
  

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://localhost:3000/adminManagement', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        console.log(response); 
        setUsers(response.data);
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

  const handleDelete = async(id)=>{
    try{
      const response = await axios.delete(`http://localhost:3000/adminManagement/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(id);
        console.log(response); 
        setUsers(users.filter(user => user._id !== id));
        toast("User delete Successfull",{autoClose: 1000});
    }catch(err){
      console.log(err);
    }
  }

  const handleMakeAdmin = async(id)=>{
    console.log(id)
    try{
      const response = await axios.put(`http://localhost:3000/makeAdmin/${id}`,{},{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(id);
        console.log(response); 
        setUsers(
          users.map(user => user._id === id ? {...user, role: 'admin'} : user)
        )
        toast("Admin Changes Successfull",{autoClose: 1000});
    }catch(err){
      console.log(err);
    }
  }



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
              <th>Join Date</th>
              
              <th>Actions</th>
            </tr>
          </thead>


          <tbody>
            {users.map((element, index) => {
               return <tr key={index}>
               <td>
                 <div className="user-cell">
                   <div className="user-name">{element.name}</div>
                   <div className="user-email">{element.email}</div>
                 </div>
               </td>
               <td>
                 <span className="role-badge user-role">{element.role}</span>
               </td>
               
               <td>{new Date(element.createdAt).toISOString().slice(0, 10)}</td>
              
               <td>
               {
                  element.role === 'user' ? (
                    <button className="table-btn make-admin" onClick={()=>handleMakeAdmin(element._id)}>Make Admin</button>
                  ) : (
                    <span></span>
                  )
                }
                
                 <button className="table-icon-btn" title="Delete User" onClick={()=>handleDelete(element._id)}>
                   <svg className="table-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
               </td>
             </tr> 
            })}

          </tbody>
        </table>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  )
}

export default AdminManagement