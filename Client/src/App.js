import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './shared/Navbar';
import { Home } from './pages/Home';

import './App.scss';


export const App = () => {
  return (

    <Router>

      <Navbar />

      <Route exact path='/' component={Home} />

    </Router>

  );
}
