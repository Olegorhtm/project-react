import s from "./style.module.css";
import { useHistory } from 'react-router-dom';


const Header = ({ title, descr }) => {
	const history = useHistory();

	const thisClick = () => {
		history.push('/game')
	}
	return (
		<header className={s.root}>
			<div className={s.forest}></div>
			<div className={s.silhouette}></div>
			<div className={s.moon}></div>
			<div className={s.container}>
				<h1>{title}</h1>
				<p>{descr}</p>
				<button className={s.button} onClick={thisClick}>
					Go game
			        </button>
			</div>
		</header>
	);
};
export default Header;