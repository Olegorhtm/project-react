import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import s from "./style.module.css"
import PokemonCard from "../../PokemonGame/index.js";
import POCEMONS from "../../PokemonGame/PokemonCards.js";


const GamePage = ({ isActive }) => {
	const history = useHistory();
	const thisClick = () => {
		history.push('/');
  }
  	const [newArry,setNewArry] = useState(JSON.parse(JSON.stringify(POCEMONS)));
  	const handleClickCards = (id) => {
  		setNewArry(prevState => prevState.filter(item =>{ 
  		  			if (item.id === id) {
  		  				item.active = true;
  		  			}
  		  			return true;
  		  		}))
  	}
	return(
		<div>
			<div>
				<h1>This page is Game page!</h1>
				<button className={s.button} onClick={thisClick}>
				Back, or Home
				</button>
			</div>
			<div className={s.flex} onClick={handleClickCards}>
			{
			POCEMONS.map(item => <PokemonCard key={item.id}  {...item}/>)
			}
			</div>
		</div>
		)
};

export default GamePage;