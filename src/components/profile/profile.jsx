import React from 'react'
import s from './profile.module.css';

import Post from '../post';

const Profile = () => {
    return (
        <main className={`${s.content}`}>
            <div className="profile__img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuM4ZAKKGSQmnwPbGNfXYoiBI39iMQevIX2hy9yEIeuquAxrfZ&usqp=CAU" alt="Profile"/>
            </div>
            <Post />
        </main>
    );
}

export default Profile;