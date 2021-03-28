import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from "./routes/Start/StartPage.js";
import BoardPage from "./routes/Board/boardGame.js";
import FinishPage from "./routes/Finish/finishGame.js";
import { PokemonsContext } from "../../context/contextPokemon.js";
import { useState } from "react";

const GamePage = () => {
	const [selectedPokemons, setSelectedPokemons] = useState({});
	const [enemySelectedPokemons, setEnemySelectedPokemons] = useState({});
	const [statusGame, setStatusGame] = useState('');
	const match = useRouteMatch();


	const handelStatusGame = (status) => {
		setStatusGame(status)
	}
	const handelSelectCard = (key, pokemon) => {
		setSelectedPokemons(prevState => {
			if (prevState[key]) {
				const copyState = { ...prevState };
				delete copyState[key];
				return copyState;
			}
			return {
				...prevState,
				[key]: pokemon,
			}
		})
	}
	const handelSelectCardEnemy = (initPlayerEnemy) => {
		setEnemySelectedPokemons((newState) => { return initPlayerEnemy })
	}

	const handelSelectDelete = () => {
		setSelectedPokemons(prevState => "");
	}

	return (
		<PokemonsContext.Provider value={{
			pokemons: selectedPokemons,
			enemyPocemon: enemySelectedPokemons,
			onSelectedEnemyPokemons: handelSelectCardEnemy,
			onStatusGame: handelStatusGame,
			onSelectedPokemons: handelSelectCard,
			oncleanStateSelected: handelSelectDelete

		}}>
			<Switch>
				<Route path={`${match.path}/`} exact component={StartPage} />
				<Route path={`${match.path}/board`} component={BoardPage} />
				<Route path={`${match.path}/finish`} component={FinishPage} />
			</Switch>
		</PokemonsContext.Provider>
	);
};
export default GamePage;