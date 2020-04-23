import React from 'react';
import s from'./Post.module.css';
const Post = (props) => {
    return  <div className={s.item}>
        {props.message}
        <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1200px-FC_Chelsea_Logo.svg.png'/>
        post 1
        <div>
        <span>Like</span> {props.age}
        </div>
    </div>
  
}

export default Post;
