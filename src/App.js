import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllCards from './components/AllCards.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <AllCards />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
