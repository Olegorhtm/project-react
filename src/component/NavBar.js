import nav from "./navbar.module.css";
import cm from 'classnames';

const NavBar = ({isOpen, bgActive=false, onClickHumburg}) => {
  
return(
	<nav className={cm(nav.root, {[nav.bgActive]: bgActive})}> 
  <div className={nav.navWrapper}>
    <p className={nav.brand}>
      LOGO
    </p>
    <div 
      className={cm(nav.menuButton, {
        [nav.active]: isOpen
      })}
      onClick={onClickHumburg}
    >
      <span />
    </div>
  </div>
</nav>
)};

export default NavBar;

