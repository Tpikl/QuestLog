import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './shared/Navbar';
import { Home } from './pages/Home';
import { Weekly } from './pages/Weekly';

import './App.scss';


export const App = (props) => {
  return (

    <Router>

      <Navbar />

      <Route exact path='/' component={Home} />
      <Route path='/weekly' component={Weekly} />

    </Router>

  );
}
