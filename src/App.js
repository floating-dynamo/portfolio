import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio />
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
