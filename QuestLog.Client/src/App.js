import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/globalStyle';
import { theme } from './style/theme';
import { Navbar } from './shared/Navbar';
import Home from './pages/Home';
import Monthly from './pages/Monthly';
import Weekly from './pages/Weekly';
import { InitialState } from './state/entry';
import { Modal } from './shared/Modal';
import { EntryForm } from './forms/EntryForm';

export const App = () => {
    const [date, setDate] = useState(new Date());

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState({...InitialState});
    const selectModal = (entry) => {
        setSelectedEntry(entry);
        setModalOpen(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>

                <Navbar date={date} />
                <div className='pillar'>
                    <Route
                        exact path='/'
                        render={() => <Home date={date} setDate={setDate} />} />
                    <Route
                        exact path='/monthly'
                        render={() => <Monthly date={date} selectModal={selectModal} />} />
                    <Route
                        exact path='/weekly'
                        render={() => <Weekly date={date} selectModal={selectModal} />} />
                </div>

                <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}>
                    <EntryForm
                        entry={selectedEntry}
                        onUpdate={d => {
                            setDate(d);
                            setModalOpen(false);
                        }} />
                </Modal>

            </Router>
        </ThemeProvider>
    );
}
