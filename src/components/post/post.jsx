import React, { Fragment } from 'react';

import s from './post.module.css'
import PostItem from './post-item';


const Post = () => {
    return (
        <Fragment>
            <div className={`${s['add-post']}`}>
                <textarea className={`${s.textarea}`}></textarea>
                <button>Add post</button>
            </div>
            <div className={`${s.posts}`}>
                <PostItem post={ { likeCount: 5, message: 'Some text'} }    />
                <PostItem post={ { likeCount: 52, message: 'Some text 23'} }  />
                <PostItem post={ { likeCount: 0, message: 'Hhahaha'} }  />
                <PostItem  post={ { likeCount: 57, message: 'What\'d you like?'} } />
            </div>
        </Fragment>
    );
}

export default Post;