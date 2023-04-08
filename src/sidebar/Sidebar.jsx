import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://wallpapercave.com/fwp/mrKlTlm.jpg" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                <i className=" sidebarIcon fa-brands fa-square-facebook"></i> 
                <i className=" sidebarIcon fa-brands fa-twitter"></i> 
                <i className=" sidebarIcon fa-brands fa-square-pinterest"></i> 
                <i className=" sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar