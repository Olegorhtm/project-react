import s from "./style.module.css";
import { useHistory } from "react-router-dom";
import cm from "classnames";
import { FirebaseContext } from "../../../../context/firebaseContext.js";
import { PokemonsContext } from '../../../../context/contextPokemon.js';
import PokemonCard from "../../../../PokemonGame/index.js";
import { useContext, useState } from "react";

const FinishPage = () => {
	const [enemyState, setEnemyPokemon] = useState(null);
	const pokemonsContext = useContext(PokemonsContext);
	const firebase = useContext(FirebaseContext);
	const history = useHistory();

	const handlClickEsc = () => {
		enemyState && firebase.addPokemon(enemyState)
		history.replace('/game');
	}

	const handleClick = (enemyState) => {
		setEnemyPokemon(enemyState)
	};

	if (Object.keys(pokemonsContext.enemyPocemon).length === 0) {
		history.replace('/game');
	}

	return (
		<>
			<div className={cm(s.myCard, s.flex)}>
				{
					Object.entries(pokemonsContext.pokemons).map(([key, item]) => (
						<PokemonCard
							key={key}
							name={item.name}
							isActive
							img={item.img}
							id={item.id}
							type={item.type}
							values={item.values}

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

					Object.entries(pokemonsContext.enemyPocemon).map(([key, item]) => (
						<PokemonCard
							className={s.card}
							key={key}
							keyId={key}
							name={item.name}
							isActive
							isSelected={enemyState?.id === item.id}
							img={item.img}
							id={item.id}
							type={item.type}
							values={item.values}
							handleClickCardes={() => {
								if (Object.keys(pokemonsContext.pokemons).length < 1 || item) {
									handleClick(item)
								}
							}
							}
						/>
					))
				}
			</div>
		</>
	)
}
export default FinishPage;
