import cm from 'classnames';
import {Link} from 'react-router-dom';
import s from "./menu.module.css"


const MENU = [
    {
      title : 'HOME',
      to    : '/', 
    },
    {
      title : 'GAME',
      to    : 'game'
    },
    {
      title : 'ABOUT',
      to    : 'about'
    },
    {
      title : 'CONTACT',
      to    : 'contact'
    }
]

const Menu = ({ isOpen, onChangeParentState }) => {
  const deactiveMenuClick=()=>{
    onChangeParentState && onChangeParentState(!isOpen);
  }
    return(
      <div className={cm(s.menuContainer, { 
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false
        })}>
        <div className={s.overlay} />
        <div>
          <ul>

            {

                  MENU.map(({title, to}, index) => (
                                      <li key={index}>
                  
                                        <Link to={to} onClick={deactiveMenuClick}> {title} </Link>
                  
                                      </li>
                  
                                  ))

            }
          </ul>
        </div>
      </div>
      )};
  

export default Menu;