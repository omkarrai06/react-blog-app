import React from 'react'
import "./write.css"

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg' src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG11c2ljJTIwYmxvZ2dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className=" writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id='fileInput' style={{display : "none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell Your Story....' type="text" className='writeInput writeText'></textarea>

            </div>

            <button className='writeSubmit'>Publish</button>

        </form>
    </div>
  )
}

export default Write
