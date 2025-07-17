import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../pages/Login.css'
import axios from 'axios'

const Login = () => {

  const [data,setData] = useState({email:'',password:'',checkbox:''})
  const navigate = useNavigate();
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/login', data)
      console.log(response);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    }catch(err){
      console.log('Error came!!');
      console.error(err);
    }
  
  }

  return (
    
    <div className="container">
  <div className="login-box">
    <div className="icon">
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
      <div className="checkbox-row">
        <label className="switch">
          <input type="checkbox" name='checkbox' checked={data.checkbox} onChange={(e) => setData({ ...data, checkbox: e.target.checked })} />
          <span className="slider" />
        </label>
        <span className="checkbox-label">Login as Admin</span>
      </div>
      <button type="submit" className="login-btn" >Login</button>
    </form>
    <div className="signup">
      Don't have an account? <Link className='login' to='/signup'>Sign up</Link>
    </div>
  </div>
</div>

  )
}
// onClick={()=>useNavigate('/dashboard')}
export default Login