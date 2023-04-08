import React from 'react'
import "./post.css"
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className='post'>
       <Link to='singlepst' style={{textDecoration:"none", color:"inherit"}} > <img className='postImg'  src="https://images.unsplash.com/photo-1542550826-15ab433fc407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /> </Link>

        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>

            <span className="postTitle"> <Link to='singlepst' style={{textDecoration:"none", color:"inherit"}} >Lorem ispum dolor sit amet</Link> </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
        omkar rai Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore a qui praesentium quia. Tenetur iusto dolorum quam voluptatem aspernatur consectetur eveniet perferendis animi ducimus accusantium. Laboriosam ipsam quae tempora!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore a qui praesentium quia. Tenetur iusto dolorum quam voluptatem aspernatur consectetur eveniet perferendis animi ducimus accusantium. Laboriosam ipsam quae tempora!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore a qui praesentium quia. Tenetur iusto dolorum quam voluptatem aspernatur consectetur eveniet perferendis animi ducimus accusantium. Laboriosam ipsam quae tempora!
        </p>
    </div>
  )
}

export default Post