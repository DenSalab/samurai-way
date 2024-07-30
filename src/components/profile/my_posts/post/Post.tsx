import React, {FC} from 'react';

interface IProps {
  message: string;
}

const Post: FC<IProps> = ({message}) => {
  return (
    <div>{message}</div>
  );
};

export default Post;
