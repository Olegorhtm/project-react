import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import Homepage from "./routes/home/Homepage.js";
import GamePage from "./routes/game/index.js";
import MenuHeader from "./component/MenuHeader.js";
import Footer from "./component/Footer.js";
import AboutPage from "./routes/AboutPage/index.js";
import ConatactPage from "./routes/ContactPage/index.js";
import NotFound from "./routes/NotFound/index.js";
import {FirebaseContext} from "./context/firebaseContext.js";
import s from "./style.module.css";
import Firebase from "./service/firebase.js";

const App = () => {
	const location = useLocation();
	const isPadding = location.pathname === '/' || location.pathname === '/game/board';
	

	return (
	  <FirebaseContext.Provider value={new Firebase()}>
		<Switch>
			<Route>
				<div>
					<MenuHeader bgActive = {!isPadding} />
					<div className = {cn(s.wrap, {
						[s.isHomePage]: isPadding
					})}>
						<Switch>
							<Route path="/" exact component={Homepage} />
							<Route path="/home" component={Homepage} />
							<Route path="/game" component={GamePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/contact" component={ConatactPage} />
							<Route path="/404" component={NotFound} />

							<Route render={() => (
								<Redirect to="/404" component={NotFound} />
							)} />
						</Switch>
					</div>
					<Footer />
				</div>
			</Route>
		</Switch>
		</FirebaseContext.Provider>
	)
};
export default App;