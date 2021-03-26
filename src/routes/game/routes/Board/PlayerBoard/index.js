import s from "./style.module.css";
import cn from "classnames";
import PokemonCard from "../../../../../PokemonGame/index";
import { useState } from "react";

const PlayerBoard = ({player, cards, onClickCard }) => {
    const [isSelected, setSelected] = useState(null);
    return (
        <>
        {
                    cards.map((item) => (
                        <div 
                            className={cn(s.cardBoard, {
                            [s.selected]: isSelected === item.id
                        })}
                            onClick={()=>{
                                setSelected(item.id);
                                onClickCard && onClickCard({
                                    player,
                                    ...item,
                                    })
                        }}
                        >
                            <PokemonCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img}                               
                                type={item.type}
                                values={item.values}
                                minimize 
                                isActive
                            />
                            </div>
                    ))   
             }
        </>
    )
}
export default PlayerBoard;