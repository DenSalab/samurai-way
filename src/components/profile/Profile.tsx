import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./my_posts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://a.d-cd.net/LsAAAgD6c-A-960.jpg" alt="car"/>

      <div>
        ava + description
      </div>
      <div>
        My posts
      </div>

      <MyPosts/>
    </div>
  );
};

export default Profile;
