import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

export default function TopBar() {
    const user = false
    return (
        <div className='top d-flex justify-content-between'>
            <div className='topLeft' style={{flex:"3"}}>
                <i className=" topIcon fa-brands fa-square-facebook"></i> 
                <i className=" topIcon fa-brands fa-twitter"></i> 
                <i className=" topIcon fa-brands fa-square-pinterest"></i> 
                <i className=" topIcon fa-brands fa-instagram"></i></div>

            <div className='topCenter' style={{flex:"6"}}>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'><Link to="write" style={{textDecoration:"none", color:"inherit"}} >WRITE</Link> </li>
                    <li className='topListItem'>
                        {user && "LOGOUT" }
                    </li>
                </ul>
            </div>

            <div className='topRight ' style={{flex:"3"}}>

                {
                    user ? (
                        <img className='topImg' src="https://wallpapercave.com/wp/wp2686603.jpg" alt="" />
                    ) : (
                        <ul className='topList'>
                          <li className='topListItem'>   
                        <Link className='link' style={{textDecoration:"none", color:"inherit"}}to="login">LOGIN</Link>
                        </li>

                        <li className='topListItem'>
                        <Link className='link' style={{textDecoration:"none", color:"inherit"}}to="register">REGISTER</Link>
                        </li>
                        </ul>
                    )
                }

                
                <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
