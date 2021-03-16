// import { useState } from "react";
import nav from "./navbar.module.css";
import cm from 'classnames';
const NavBar = ({activationsMenu, setActive}) => {

return(
	<nav className={nav.root}>
  <div className={nav.navWrapper}>
    <p className={nav.brand}>
      LOGO
    </p>
    <a href="/#" 
    className={cm(nav.menuButton,
     {[nav.active]: activationsMenu})} 
    onClickse = {() => {setActive(!activationsMenu)}}>
      <span />
    </a>
  </div>
</nav>
)};

export default NavBar;

