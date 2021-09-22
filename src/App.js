import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllCards from './components/AllCards.js';

function App() {
  return (
    <div className='App'>
      <Router path='/home' exact>
        <NavBar />
        <AllCards />
      </Router>
    </div>
  );
}

export default App;
