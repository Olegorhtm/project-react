import s from "./style.module.css";
 import {useContext, useEffect, useState} from "react";
 import {useHistory} from "react-router-dom";
 import {PokemonsContext} from "../../../../context/contextPokemon";
 import PokemonCard from "../../../../PokemonGame/index";
 import PlayerBoard from "./PlayerBoard/index.js";

 const counterCard = (board, player1, player2) => {
   let player1Count = player1.length;
   let player2Count = player2.length;

   board.forEach(item => {
      if (item.card.possession === 'red') {
         player2Count++;
      }
      if (item.card.possession === 'blue') {
         player1Count++;
      }
   })
   return [player1Count, player2Count];
 };

const BoardPage = () => {
     const {pokemons} = useContext(PokemonsContext);
     const history = useHistory();
     const [choiseCard, setChoiseCard] = useState(null);
     const [steep, setSteep] = useState(0);
     const [board, setBoard] = useState([]);
     const [player1, setPlayer1] = useState(()=>{
        return Object.values(pokemons).map(item=>({
           ...item,
           possession: 'blue',
        }))
     });
     const [player2, setPlayer2] = useState([]);
 
     const handleBoardClick = async (position)=>{
       console.log('posit', position);
       console.log('card: ', choiseCard);
       if (choiseCard) {
          const params = {
             position,
             card: choiseCard,
             board,
          };
       const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        
        const request = await res.json();
        console.log('request: ', request);
        

        if (choiseCard.player === 1) {
           setPlayer1(prevState => prevState.filter(item => item.id !== choiseCard.id));
        }
        if (choiseCard.player === 2) {
         setPlayer2(prevState => prevState.filter(item => item.id !== choiseCard.id));
      }
      setBoard(request.data);
    
      setSteep(prevState => {
         const count = prevState + 1;
         return count;
      })
       }
     }
     useEffect(()=>{
         if (steep === 9) {
            const [count1, count2] = counterCard(board, player1, player2);

            if (count1 > count2) {
               alert('Победа! :) бери с полочки... карточку');             
            } else if (count1<count2) {
               alert('К счастью проиграл)) ну нам тоже карточки нужны)) ');
            } else {
               alert('Ни твоя, ни моя, ничья...')
               
            }history.replace('/game/finish');
         }
     }, [steep]);

     useEffect( async () => {

      
         const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data)
    
     
          const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        
            
        setPlayer2(()=>{
         return player2Request.data.map(item=>({
            ...item,
            possession: 'red' }))

      })
      PokemonsContext.onSelectedEnemyPokemons(setPlayer2);

      }, []);

     if (Object.keys(pokemons).length === 0) {
         history.replace('/game');
     }
    return (
                 <div className={s.root}>
					<div className={s.playerOne}>
                <PlayerBoard
                 player={1}
                 cards={player1}
                 onClickCard={(card)=>setChoiseCard(card)}
                />
                 
                      
						</div>
            <div className={s.board}>
            {
              board.map(item =>(
                <div 
                key={item.position}
                className={s.boardPlate}
                onClick={() => !item.card && handleBoardClick(item.position)}
                 >
                 {
                    item.card && <PokemonCard {...item.card} isActive minimize />
                 }
                 </div>
               ))
            }

            </div>
            <div className={s.playerTwo}>
            <PlayerBoard
             player={2}
             cards={player2}
             onClickCard={(card)=>setChoiseCard(card)} 
             />
            </div>
        </div>
    );
};

export default BoardPage;