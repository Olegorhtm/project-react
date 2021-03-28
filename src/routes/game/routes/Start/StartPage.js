import { useState, useEffect, useContext } from 'react';
import PokemonCard from "../../../../PokemonGame/index.js";
import s from "./style.module.css";
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../../../../context/firebaseContext.js";
import { PokemonsContext } from '../../../../context/contextPokemon.js';

const StartPage = () => {
	const firebase = useContext(FirebaseContext);
	const pokemonsContext = useContext(PokemonsContext);
	const history = useHistory();
	const [pokemons, setNewArry] = useState({});

	useEffect(() => {
		firebase.getPocemonSoket((pokemons) => {
			setNewArry(pokemons);
		});

		return () => firebase.offPocemonSoket();
	}, []);
	useEffect(() => {
		return pokemonsContext.oncleanStateSelected()
	}, [])

	const handleSelected = (key) => {
		const pokemon = { ...pokemons[key] }
		pokemonsContext.onSelectedPokemons(key, pokemon);

		setNewArry(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected,
			}
		}))
	};

	const handleClickStart = () => {
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
					Object.entries(pokemons).map(([key, { name, img, selected, id, type, values }]) => (

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
							handleClickCardes={() => {
								if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
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

