import React from 'react' ;
import LikeButton from './likebutton' ; 
import "./postcard.css" ;
const Postcard = ({post}) => {
  return (
    <div className = "Post-Card">
        <img src={post.profileImage} alt="Image Given" className="postImage"></img>
        <div>
            <h2>UserName : {post.username}</h2>
            <p>Content : {post.content}</p>
            <LikeButton isLiked={post.isLiked}/>
        </div>     
    </div>
  )
}

export default Postcard
