import {useRouteMatch, Switch, Route} from 'react-router-dom';
import StartPage from "./routes/Start/StartPage.js";
import BoardPage from "./routes/Board/boardGame.js";
import FinishPage from "./routes/Finish/finishGame.js";
import {PokemonsContext} from "../../context/contextPokemon.js";
import {useState} from "react";

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
	const [enemySelectedPokemons, setEnemySelectedPokemons] = useState({});
    const match = useRouteMatch();

    const handelSelectCard = (key, pokemon) => {
       setSelectedPokemons(prevState => {
       	if (prevState[key]){
       		const copyState = {...prevState};
       		delete copyState[key];
       		return copyState;
       	}
       	return {
       		...prevState,
       		[key]: pokemon,
       	}
       })
    }
	const handelSelectCardEnemy = (obj) => {
		setEnemySelectedPokemons(() =>{ return enemySelectedPokemons })
	 }
	
	const handelSelectDelete = () => {
		setSelectedPokemons(prevState => {});
	}
	
    return (
	<PokemonsContext.Provider value={{
				       pokemons: selectedPokemons,
					   enemyPocemon: enemySelectedPokemons,
					   onSelectedEnemyPokemons: handelSelectCardEnemy,
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