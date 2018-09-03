import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Transform from './Pages/Transform';
import Transition from './Pages/Transition';
import Activities from './Pages/Activities';
import './App.css';

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div className="App">
          <ul className="navigation">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/transform'>Transform</Link>
            </li>
            <li>
              <Link to='/transition'>Transition</Link>
            </li>
            <li>
              <Link to='/activities'>Activities</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/transform" component={Transform} />
          <Route path="/transition" component={Transition} />
          <Route path="/activities" component={Activities} />
        </div>
      </Router>
    );
  }
}

export default App;
