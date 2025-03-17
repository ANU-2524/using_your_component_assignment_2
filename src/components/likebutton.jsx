import React , {useState}  from 'react'

const Likebutton = ({likeValue}) => {
    const [Liked , setLiked ]= useState({likeValue})
    const toggleLike = ()=>{
        setLiked(!Liked) ;
    } ;
  return (
    <div>
        <button onClick = {toggleLike}>{Liked ? " ❤️LIKED !" : " 🤍LIKE"}</button>
    </div>
  )
}

export default Likebutton ;
