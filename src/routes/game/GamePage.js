
const GamePage = ({onReset}) => {
	
	const handleClickButton = (page) => {
    onReset && onReset(page);
  }; 
	return(
		<div>
			<div>
				This page is Game page!
				<button onClick={handleClickButton}>
				Next
				</button>
			</div>
		</div>
		)
};

export default GamePage;