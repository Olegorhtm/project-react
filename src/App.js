import { useState } from 'react';
import Homepage from "./routes/home/Homepage.js";
import GamePage from "./routes/game/GamePage.js";

const App = () => {
	const [page, setPage] = useState('app');

	const handleChangePage = (page) => {
		setPage(page);
	}
	const handleResetPage = (page) => {
		setPage(!page);
	}

	switch (page) {
		case "app": 
			return <Homepage onChangePage = {handleChangePage}/>
		case "game": 
			return <GamePage onReset = {handleResetPage}/>
		default:
			return <Homepage onChangePage = {handleChangePage}/>
	}
};
export default App;