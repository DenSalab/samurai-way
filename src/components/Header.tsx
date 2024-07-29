import React from 'react';
import '../App.css';

interface IHeader {

}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className={"header"}>
      <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" alt="logo"/>
    </header>
  );
};

export default Header;
