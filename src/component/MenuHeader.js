import { useState } from "react";
import Menu from "./menu.js";
import NavBar from "./NavBar.js";

const MenuHeader = ({ bgActive }) => {
	const [isOpen, setOpen] = useState(null);
	const handleClickHamburg = () => {
		setOpen((prevState) => !prevState);
	}
	
return(
	<div>
      <Menu isOpen={isOpen}  onChangeParentState={handleClickHamburg} />
      <NavBar isOpen={isOpen}  bgActive={bgActive} onClickHumburg={handleClickHamburg} />
	</div>
	)
}

export default MenuHeader;