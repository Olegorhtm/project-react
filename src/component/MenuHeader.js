import { useState } from "react";
import Menu from "./menu.js";
import NavBar from "./NavBar.js";

const MenuHeader = () => {

const [active, setActive] = useState(null);

return(
	<div>
      <Menu activationsMenu = {active}/>
      <NavBar activationsMenu = {active} setActive = {setActive}/>
	</div>
	)
}

export default MenuHeader;