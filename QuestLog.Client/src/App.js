import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/globalStyle';
import { theme } from './style/theme';
import { Navbar } from './shared/Navbar';
import Home from './pages/Home';
import Weekly from './pages/Weekly';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>

                <Navbar />
                <div className='pillar'>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/weekly' component={Weekly} />
                </div>

            </Router>
        </ThemeProvider>
    );
}
