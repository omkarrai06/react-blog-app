import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitles' >
                <span className='headerTitleSm'>React</span>
                <span className='headerTitleLg'>Blog</span>
            </div>

            <img className='headerImg' src="https://plus.unsplash.com/premium_photo-1661559131354-0f189d5970e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
        </div>
    )
}

export default Header
