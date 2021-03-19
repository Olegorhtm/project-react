import s from "./style.module.css";
import {useHistory} from 'react-router-dom';

const Header = ({title, descr, onClickButton}) => {
	const history = useHistory();
	const thisClick = () => {
		history.push('/game')
	}

const Header = (props) => {

	return(
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

			        <h1>{props.title}</h1>
			        <p>{props.descr}</p>

			    </div>
			</header>
		);
};
export default Header;