import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        
        <span className="registerTitle">REGISTER</span>

<form className="registerForm">

<label>Username</label>
    <input type="text" className='registerInput' placeholder='Enter Your Username...' />

    <label>Email</label>
    <input type="text" className='registerInput' placeholder='Enter Your Email...' />

    <label>Password</label>
    <input type="password" className='registerInput' placeholder='Enter Your Password....' />

    <button className="registerButton">Register</button>

</form>

<button className="registerLoginButton"><Link className='link' style={{textDecoration:"none", color:"inherit"}}to="/login">LOGIN</Link></button>
    </div>
  )
}

export default Register
