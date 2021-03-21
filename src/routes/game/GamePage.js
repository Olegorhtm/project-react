import { useState, useEffect } from 'react';
import database from "../../service/firebase.js";
import s from "./style.module.css";
import PokemonCard from "../../PokemonGame/index.js";



const GamePage = () => {

	const [pokemons, setNewArry] = useState({});


	const handleClickCards = (id) => {
		setNewArry(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] };
				if (pokemon.id === id) {
					pokemon.active = true;					
				};
			acc[item[0]] = pokemon	
			return acc;
			});
		}); 
	};

const data = () => database.ref('pokemons/').once('value', (snapshot) => {setNewArry(snapshot.val())});

	useEffect( async () => {
		await data()
	}, [pokemons]);

	const addCard = (key) => {
		const newKey = database.ref().child('pokemons/').push().key;
		const copyPokemon = JSON.parse(JSON.stringify('pokemons/'));
		database.ref('pokemons/' + newKey).set(copyPokemon);
	}


	return (
		<div>
		<div>
			<button className={s.button} onClick={addCard}>Add New Card</button>
		</div>

		<div className={s.flex}>
			{
				Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) => (
					<PokemonCard
						key={key}
						keyId={key}
						name={name}
						isActive={true}
						img={img}
						id={id}
						type={type}
						values={values}
						onClick={handleClickCards}
					/>
				))
			}
		</div>

	</div>);
}

export default GamePage;

