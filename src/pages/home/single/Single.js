import React from 'react'
import "./single.css"
import Sidebar from '../../../sidebar/Sidebar'
import SinglePst from '../../../singlePst/SinglePst'



const Single = () => {
  return (
    <div className='single'>
        <SinglePst />
        <Sidebar />
    </div>
  )
}

export default Single
