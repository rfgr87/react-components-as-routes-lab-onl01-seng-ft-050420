import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = () => {
  return (
    <Router history={browserHistory} >
      <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/actors" component={Actors} />
      <Route exact path="/directors" component={Directors} />
      </div>
    </Router>
  );
};

export default App