import React, { useState } from 'react'
import '../Login/login.css'
import { Link, useNavigate} from 'react-router-dom'

const Login=()=> {
  let navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5050/api/shico/user/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password }),

      });
      const json = await response.json();
      
      console.log(json)
      if (json.success) {
          //Save the auth taken and redirect
          
          localStorage.setItem('token', json.token)
          localStorage.setItem('name', json.user.name)
          localStorage.setItem('email', json.user.email)
          localStorage.setItem('password', json.user.password)
          localStorage.setItem('mobile', json.user.mobile)
          console.log(json.token)
          navigate("/")


      }
      else {
          alert("Invalid Credentials")
      }

  }
  
  return (
    <>
   
    
  
    <div className="login-container container flex column">
        <h1 className="login-heading">Hi, Welcome to Shico!</h1>
        <p className="">Log in to your account</p>
        <form action="post" onSubmit={handleSubmit}>
           <div className="form-group flex-column">
                <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
                <input type="password" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
            <button className="">Verify</button>
        </form>

        <div className="footer">
            <div className="first-text">don't have an account yet ?</div>
            <div className="register"><Link to='/register'>create account</Link></div>
        </div>
    </div>
    </>
  )
}

export default Login