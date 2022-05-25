import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/portfolio/contact">
						<ContactPage />
					</Route>
					<Route exact path="/portfolio/about">
						<AboutPage />
					</Route>
					<Route exact path="/portfolio/portfolio-page">
						<PortfolioPage />
					</Route>
					<Route exact path="/portfolio">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
