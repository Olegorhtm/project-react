import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import Homepage from "./routes/home/Homepage.js";
import GamePage from "./routes/game/GamePage.js";
import MenuHeader from "./component/MenuHeader.js";
import Footer from "./component/Footer.js";
import AboutPage from "./routes/AboutPage/index.js";
import ConatactPage from "./routes/ContactPage/index.js";
import NotFound from "./routes/NotFound/index.js";

import s from "./style.module.css";

const App = () => {
	const match = useRouteMatch('/');

	return (
		<Switch>
			<Route>
				<div>
					<MenuHeader bgActive={!match.isExact} />
					<div className={cn(s.wrap, {
						[s.isHomePage]: match.isExact
					})}>
						<Switch>
							<Route path="/" exact component={Homepage} />
							<Route path="/home" component={Homepage} />
							<Route path="/game" component={GamePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/contact" component={ConatactPage} />

							<Route render={() => (
								<Redirect to="/404" component={NotFound} />
							)} />
						</Switch>
					</div>
					<Footer />
				</div>
			</Route>
		</Switch>
	)
};
export default App;