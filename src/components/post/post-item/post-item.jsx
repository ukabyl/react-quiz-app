import React from 'react';

import s from './post-item.module.css'

const Post = ({ post }) => {
    return (
        <div className={`${s.item}`}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuM4ZAKKGSQmnwPbGNfXYoiBI39iMQevIX2hy9yEIeuquAxrfZ&usqp=CAU" alt="Profile"/>
            <article>
                { post.message }
            </article>
            <div className={s.likes}>
                Likes { post.likeCount }
            </div>
        </div>
    );
}

export default Post;