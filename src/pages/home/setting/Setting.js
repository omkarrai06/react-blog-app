import React from 'react'
import './setting.css'
import Sidebar from '../../../sidebar/Sidebar'

const Setting = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label> Profile Picture </label>
                <div className="settingsPP">
                    <img src="https://wallpapercave.com/wp/wp2686603.jpg" alt="" />

                    <label htmlFor="fileInput">
                    <i className=" settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>

                    <input type="file" id='fileInput' style={{display: "none"}} />

                </div>

                <label>Username</label>
                <input type="text" placeholder='Rai'/>

                <label>Email</label>
                <input type="email" placeholder='rai@gmail.com'/>

                <label>Password</label>
                <input type="pasword" />
                <button className="settingsSubmit">Update</button>


            </form>

        </div>
        <Sidebar />
    </div>
  )
}

export default Setting
