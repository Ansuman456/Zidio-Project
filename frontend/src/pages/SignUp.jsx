import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import '../pages/SignUp.css'
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const [data,setData] = useState({name:'',email:'',password:''})
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{  
      const response = await axios.post('https://zidio-project-aidj.onrender.com/signup', data)
      console.log(response);
      localStorage.setItem('token', response.data.token);
      toast("Signup Successfull",{autoClose: 2000});
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000); // 2000ms = 2 seconds
    }catch(err){
      console.log('Error came!!');
      console.error(err);
    }
  
  }
  return (
        <div>
        <div className="container">
  <div className="create-box">
    <div className="icon">
      <svg width={40} height={40} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{"color":"#2962f3"}}>
        <rect x="2.5" y={15} width={3} height={5} rx="1.2" />
        <rect x="8.5" y={10} width={3} height={10} rx="1.2" />
        <rect x="14.5" y="5.5" width={3} height="14.5" rx="1.2" />
      </svg>
    </div>
    <div className="create-title">Create Account</div>
    <div className="create-subtitle">Join DataViz Pro to start analyzing your data</div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="fullname">Full Name</label>
        <input className="form-input" id="fullname" type="text" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder="Enter your full name" autoComplete="name" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" id="email" type="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="Enter your email" autoComplete="username" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <input className="form-input" id="password" type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} placeholder="Create a password" autoComplete="new-password" />
      </div>
      <button type="submit" className="create-btn" >Create Account</button>
    </form>
    <div className="login-link">
      Already have an account? <Link className='sign' to='/login' >Sign in</Link>
    </div>
  </div>
</div>
<ToastContainer position="bottom-right" />
  </div>
  )
}

export default SignUp