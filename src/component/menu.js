import s from "./menu.module.css"
// import {useState} from "react";
import cm from 'classnames';
 
const Menu = ({activationsMenu}) => {

  return(
<div className={cm(s.menuContainer, 
  {[s.active]: activationsMenu}, 
  )}>
  <div className={s.overlay}></div>
  <div className={s.menuItems}>
    <ul>
      <li>
        <a href="#welcome">
          HOME
        </a>
      </li>
      <li>
        <a href="#game">
          GAME
        </a>
      </li>
      <li>
        <a href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
</div>
)};

export default Menu;