import React from 'react';
import Post from "./post/Post";

const MyPosts = () => {
  return (
      <div>
        <Post message={'Post 1'}/>
        <Post message={'Post 2'}/>
        <Post message={'Post 3'}/>
      </div>
  );
};

export default MyPosts;
