import {useRouteMatch, Switch, Route} from 'react-router-dom';
import StartPage from "./routes/Start/StartPage.js";
import BoardPage from "./routes/Board/boardGame.js";
import FinishPage from "./routes/Finish/finishGame.js";
import {PokemonContext} from "../../context/contextPokemon.js";
import {useState} from "react";

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const match = useRouteMatch();

    const handelSelectCard = (key. pokemon) => {
       setSelectedPokemons(prevState => {
       	if (prevState[key]){
       		const copyState = {...prevState};
       		delete copyState[key];

       		return copyState;
       	}
       	return {
       		...prevState,
       		[key]; pokemon,
       	}
       })
    }
    return (
	<PokemonContext.Provider value={{
		       pokemons: selectedPokemons,
		       onSelectedPokemons: handelSelectCard
		     }}>
	        <Switch>
	            <Route path={`${match.path}/`} exact component={StartPage} />
	            <Route path={`${match.path}/board`} component={BoardPage} />
	            <Route path={`${match.path}/finish`} component={FinishPage} />
	        </Switch>
        </PokemonContext.Provider>
    );
};
