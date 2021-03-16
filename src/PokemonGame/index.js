import { useState } from 'react';
import cm from 'classnames';
import spc from "./style.module.css"; //StylePokemonCard
import cardBackSide from "../assets/card-back-side.jpg";


const PokemonCard = ({name, img, id, type, values}) => {
	const [isActive, setActive] = useState(false);

	const thisClick = () => {
	   setActive(!isActive); 
	};

return (
<div className={spc.root} onClick={thisClick}>
      <div className={cm(spc.pokemonCard, {[spc.active]: isActive})}>
        <div className={spc.cardFront}>
            <div className={cm(spc.wrap, spc.front)}>
                <div className={cm(spc.pokemon, spc.[type])}>
                    <div className={spc.values}>
                        <div className={cm(spc.count, spc.top)}>{values.top}</div>
                        <div className={cm(spc.count, spc.right)}>{values.right}</div>
                        <div className={cm(spc.count, spc.bottom)}>{values.bottom}</div>
                        <div className={cm(spc.count, spc.left)}>{values.left}</div>
                    </div>
                    <div className={spc.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={spc.info}>
                        <span className={spc.number}>#{id}</span>
                        <h3 className={spc.name}>{name}</h3>
                        <small className={spc.type}>Type: <span>{type}</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={spc.cardBack}>
            <div className={cm(spc.wrap, spc.back)}>
                <img src={cardBackSide} alt={name} />
            </div>
        </div>

    </div>
</div>
);
};

export default PokemonCard;