import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/globalStyle';
import { theme } from './style/theme';
import { Navbar } from './shared/Navbar';
import { Home } from './pages/Home';

import './App.scss';


export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>

                <Navbar />
                <Route exact path='/' component={Home} />

            </Router>
        </ThemeProvider>
    );
}
