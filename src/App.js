import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
