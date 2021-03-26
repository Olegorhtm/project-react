import s from "./style.module.css";
import {useHistory} from "react-router-dom";
import cm from "classnames";
// import {FirebaseContext} from "../../../../context/firebaseContext.js";
import {PokemonsContext} from '../../../../context/contextPokemon.js';
import PokemonCard from "../../../../PokemonGame/index.js";
import { useContext, useState } from "react";

const FinishPage = () => {
	const pokemonsContext = useContext(PokemonsContext);
	// const firebase = useContext(FirebaseContext);
	const history = useHistory();
	const [pokemons, setNewArry] = useState({});
	// const handleSelectedEnemyCard = (key, enemyPocemon) => {
	// 	const pokemon = {...enemyPocemon[key]}
	// 	pokemonsContext.onSelectedPokemons(key, pokemon);
	// 	setNewArry(prevState => ({
	// 		...prevState,
	// 		[key]: {
	// 			...prevState[key],
	// 			selected: !prevState[key].selected,
	// 		}
	// 	}))
	// console.log('enemyPocemon', handleClickCardes)};
	const handlClickEsc = () =>{
			history.replace('/game');
	}
	// if (Object.keys(pokemons).length === 0) {
	// 	history.replace('/game');
	// }
	
	const handleClickCardes = (isSelected, selected, key, enemyPocemon) => {
		if(Object.keys(pokemonsContext.enemyPocemon).length < 1 || selected) {
			isSelected = !enemyPocemon[key].selected			
				console.log('####^: ', selected);
		}

	  };
	return(
	<>
	<div className={cm(s.myCard, s.flex)}>
		{ 
				Object.entries(pokemonsContext.pokemons).map(([key, {name, img, id, type, values}]) => (					
					<PokemonCard
						key={key}
						name={name}
						isActive
						img={img}
						id={id}
						type={type}
						values={values}
						
					/>
			))
		}
	</div>
	<div>
		<button
		 className={s.button}
		 onClick={handlClickEsc}
		 >
		Закончить
		</button>
	</div>
	<div className={cm(s.myCard, s.flex)}>
		
		{
		 
			Object.entries(pokemonsContext.enemyPocemon).map(([key, {name, img, values, selected, id, type}]) => (
					<PokemonCard
						className={cm(s.card)}
						key={key}
						name={name}
						isActive
						isSelected={selected}
						img={img}
						id={id}
						type={type}
						values={values}
					onClick={handleClickCardes}
					/>
			))
			}
	</div>
	</>
	)
}
export default FinishPage;
