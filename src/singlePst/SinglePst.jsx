import React from 'react'
import "./singlePst.css"
import Comment from '../comment/Comment'

const SinglePst = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg'
                    src="https://plus.unsplash.com/premium_photo-1661761787509-9f220e175e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80" alt="" />
                <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className=" singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                        Author:<b>Omkar Rai</b></span>

                    <span className='singlePostDate'>
                        1 hour ago
                    </span>
                </div>

                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut saepe fugiat totam reprehenderit impedit. Similique ea incidunt quis facilis inventore quod fugit adipisci nisi architecto nihil commodi, neque earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus ratione consequuntur dolorum tempora molestias maiores quod, nam illum id deleniti atque corrupti debitis ipsa laboriosam dolorem adipisci quaerat! Ipsa.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam amet, consequuntur, quia saepe molestiae recusandae adipisci a eaque dolores inventore ducimus eligendi. Modi quam eligendi perspiciatis earum non quod repellendus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam amet, consequuntur, quia saepe molestiae recusandae adipisci a eaque dolores inventore ducimus eligendi. Modi quam eligendi perspiciatis earum non quod repellendus! 
                </p>
                <Comment />
            </div>

            
        </div>
    )
}

export default SinglePst