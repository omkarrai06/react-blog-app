import React from 'react'
import './comment.css'

const Comment = () => {
  return (
    <div className='comment'>
        <form className='commentForm'>
            <div className="commentFormGroup">
                <label htmlFor="fileInput">
                    <i className=" commentIcon fa-solid fa-plus"></i></label>
                <input type="file" id='fileInput' style={{display : "none"}} />
                <input type="text" placeholder='Comment' className='commentInput' autoFocus={true} />
            </div>

            <div className="commentFormGroup">
                <textarea placeholder='Write Your Comment....' type="text" className='commentInput commentText'></textarea>

            </div>

            <button className='commentSubmit'>Publish</button>

        </form>
    </div>
  )
}

export default Comment
