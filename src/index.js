import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import blueGray from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
    palette: {
        primary: blueGray,
        // type: 'dark'
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
