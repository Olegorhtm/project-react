import s from "./style.module.css";
import {useHistory} from "react-router-dom";
import cm from "classnames";
import {FirebaseContext} from "../../../../context/firebaseContext.js";
import {PokemonsContext} from '../../../../context/contextPokemon.js';
import PokemonCard from "../../../../PokemonGame/index.js";
import { useContext } from "react";

const FinishPage = () => {
	const pokemonsContext = useContext(PokemonsContext);
	const firebase = useContext(FirebaseContext);
	const history = useHistory();

	const handlClickEsc =()=>{
		const copyCard = JSON.parse(JSON.stringify(pokemonsContext.enemyPocemon));
		firebase.addPokemon(copyCard);
		pokemonsContext.oncleanStateSelected();
		history.replace('/game');
	}

	const handleSelectedEnemyCard = (key) => {
		const pokemon = {...pokemons[key]}
		pokemonsContext.onSelectedPokemons(key, pokemon);
		
		setNewArry(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected,
			}
		}))
	};
	console.log('context', pokemonsContext)

	return(
	<>
	<div className={cm(s.myCard, s.flex)}>
		{ 
				Object.entries(pokemonsContext.pokemons).map(([key, {name, img, id, type, values}]) => (					
					<PokemonCard
						className={s.card}
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
	<div className={s.enemyCard}>
		
		{
		 
			Object.entries(pokemonsContext.enemyPocemon).map(({name, key, img, values, selected, id, type}) => (
					<PokemonCard
						className={cm(s.myCard, s.flex)}
						key={id}
						name={name}
						isActive
						isSelected={selected}
						img={img}
						id={id}
						type={type}
						values={values}
						handleClickCardes={() =>{
							if(Object.keys(pokemonsContext.enemyPocemon).length < 1 || selected) {
								handleSelectedEnemyCard(key)
								}
							}}
					/>
			))
			}
	</div>
	</>
	)
}
export default FinishPage;
