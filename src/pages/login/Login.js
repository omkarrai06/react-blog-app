import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>

            <span className="loginTitle">LOGIN</span>

            <form className="loginForm">
                <label>Email</label>
                <input type="text" className='loginInput' placeholder='Enter Your Email...' />

                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter Your Password....' />

                <button className="loginButton">Login</button>

            </form>

            <button className="loginRegisterButton"><Link to="/register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link></button>

        </div>
    )
}

export default Login
