import React from 'react';
import s from './Profile.module.css';

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
      <div>
        <div>post 1</div>
        <div>post 2</div>
        <div>post 3</div>
      </div>
    </div>
  );
};

export default Profile;
