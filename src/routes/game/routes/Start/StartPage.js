import { useState, useEffect, useContext} from 'react';
import PokemonCard from "../../../../PokemonGame/index.js";
import s from "./style.module.css";
import {useHistory} from "react-router-dom"
import {FirebaseContext} from "../../../../context/firebaseContext.js";
import { PokemonContext} from '../../../../context/contextPokemon.js';

const StartPage = () => {
	const firebase = useContext(FirebaseContext);
	const pokemonsContext = useContext(PokemonContext);
	const history = useHistory();
	console.log('####: pokemonsContext', pokemonsContext);
	const [pokemons, setNewArry] = useState({});

	useEffect(() => {
		 firebase.getPocemonSoket((pokemons) => {
		 	setNewArry(pokemons);
		 });

		 return () => firebase.offPocemonSoket();
	}, []);


	const handleSelected = (key) => {
		const pokemon = {...pokemons[key]};
		pokemonsContext.handelSelectCard(key, pokemon);
		
		setNewArry(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected,
			}
		}))
	};

	const handleClickStart =()=> {
		history.push('/game/board');
	}
					

	return (
		<div>
		<div>
			<button 
			className={s.button} 
			onClick={handleClickStart}
			disabled={Object.keys(pokemonsContext.pokemons).length < 5}
			>
				Start Game
			</button>
		</div>

		<div className={s.flex}>
			{
				Object.entries(pokemons).map(([key, { keyId, name, img, selected, id, type, values}]) => (
				
					<PokemonCard
						className={s.card}
						key={key}
						keyId={key}
						name={name}
						isActive={true}
						isSelected={selected}
						img={img}
						id={id}
						type={type}
						values={values}
						handleClickCards={() =>{
							if(Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
									handleSelected(key)
								}
							}}
					/>
					))
			}
		</div>

	</div>);
}
export default StartPage;

