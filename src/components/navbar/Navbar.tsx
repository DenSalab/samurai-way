import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

interface INavbar {

}

type Item = { linkTo: string, title: string }

const navSchema: Array<Item> = [
  {linkTo: 'profile', title: 'Profile'},
  {linkTo: 'messages', title: 'Messages'},
  {linkTo: 'news', title: 'News'},
  {linkTo: 'music', title: 'Music'},
  {linkTo: 'settings', title: 'Settings'},
]

const Navbar: React.FC<INavbar> = ({}) => {
  return (
    <nav className={s.nav}>
      {
        navSchema.map((item) => ((
          <div className={s.item}>
            <NavLink to={item.linkTo} className={s.link} activeClassName={s.activeLink}>{item.title}</NavLink>
          </div>
        )))
      }
    </nav>
  );
};

export default Navbar;
