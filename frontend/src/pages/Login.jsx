import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../pages/Login.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [data,setData] = useState({email:'',password:'',checkbox:''})
  const [error, setError] = useState('')
  const navigate = useNavigate();
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    try{
      const response = await axios.post('https://zidio-project-aidj.onrender.com/login', data)
      console.log(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      toast("Login Successfull",{autoClose: 2000});
      setTimeout(() => {
        if(response.data.role=='user')navigate('/dashboard');
        else if(response.data.role=='admin')navigate('/admin');
      }, 2000); // 2000ms = 2 seconds
      
    }catch(err){
      console.log('Error came!!');
      console.error(err);
      setError('Invalid credentials');
    }
  
  }

  return (
    
    <div className="container">
  <div className="login-box">
    <div className="icon">
      {/* Simple data chart icon SVG, blue color */}
      <svg width={40} height={40} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{"color":"#2962f3"}}>
        <rect x="2.5" y={15} width={3} height={5} rx="1.2" />
        <rect x="8.5" y={10} width={3} height={10} rx="1.2" />
        <rect x="14.5" y="5.5" width={3} height="14.5" rx="1.2" />
      </svg>
    </div>
    <div className="login-title">DataViz Pro</div>
    <div className="login-subtitle">Sign in to your analytics platform</div>
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" id="email" name='email' type="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="Enter your email" autoComplete="username" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <input className="form-input" id="password" name='password' type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} placeholder="Enter your password" autoComplete="current-password" />
      </div>
      
      <div className='danger'>{error}</div>
      <button type="submit" className="login-btn" >Login</button>
    </form>
    <div className="signup">
      Don't have an account? <Link className='login' to='/signup'>Sign up</Link>
    </div>
  </div>
  <ToastContainer position="bottom-right" />
</div>


  )
}
// onClick={()=>useNavigate('/dashboard')}
export default Login