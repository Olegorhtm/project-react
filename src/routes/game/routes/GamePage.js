// import { useState, useEffect, useContext} from 'react';
// import PokemonCard from "../../PokemonGame/index.js";
// // import database from "../../service/firebase.js";
// import s from "./style.module.css";
// import {FirebaseContext} from "../../context/firebaseContext.js";

//  const ARRPOC = 
//       {"abilities": [
//         "keen-eye",
//         "tangled-feet",
//         "big-pecks"
//       ],
//       "stats": {
//         "hp": 63,
//         "attack": 60,
//         "defense": 55,
//         "special-attack": 50,
//         "special-defense": 50,
//         "speed": 71
//       },
//       "type": "flying",
//       "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
//       "name": "pidgeotto",
//       "base_experience": 122,
//       "height": 11,
//       "id": 17,
//       "values": {
//         "top": "A",
//         "right": 2,
//         "bottom": 7,
//         "left": 5  
//     		}
// 		};

// const GamePage = () => {
// 	const firebase = useContext(FirebaseContext);
// 	const [pokemons, setNewArry] = useState({});

// 	useEffect(() => {
// 		 firebase.getPocemonSoket((pokemons) => {
// 		 	setNewArry(pokemons);
// 		 });

// 		 return () => firebase.offPocemonSoket();
// 	}, []);


// 	const handleSelected = (key) => {
// 		setNewArry(prevState => ({
// 			...prevState,
// 			[key]: {
// 				...prevState[key],
// 				selected: !prevState[key].selected,
// 			}
// 		}))
// 	};
					

// 	return (
// 		<div>
// 		<div>
// 			<button className={s.button}>Start Game</button>
// 		</div>

// 		<div className={s.flex}>
// 			{
// 				Object.entries(pokemons).map(([key, { keyId, name, img, selected, id, type, values}]) => (
				
// 					<PokemonCard
// 						className={s.card}
// 						key={key}
// 						keyId={key}
// 						name={name}
// 						isActive={true}
// 						isSelected={selected}
// 						img={img}
// 						id={id}
// 						type={type}
// 						values={values}
// 						handleClickCards={()=>handleSelected(key)}
// 					/>
// 					))
// 			}
// 		</div>

// 	</div>);
// }
// export default GamePage;

