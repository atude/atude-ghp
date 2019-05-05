import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { AppBar, Typography, IconButton, Button, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, Divider, ListItemIcon, Collapse, Paper, } from '@material-ui/core';
import { Menu, AccountBox, Buffer, ChevronDown, ChevronUp, } from 'mdi-material-ui';
import icAtude from './assets/ic_atude.png';
import DrawerCustom from './components/Drawer.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#31393C",
    },
    secondary: {
      main: "#2176FF",
    },

    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    typography: { useNextVariants: true },
  },
});

const themeSidebar = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#ffffff",
      dark: "#ffffff",
    },
    typography: { useNextVariants: true },
  },
});

class App extends Component {  
  constructor(props) {
    super(props);    
  }
  render() {
  
    return (
      <div>
      <DrawerCustom/>
      <MuiThemeProvider theme={theme}>
        <div className="HomeContainer">
          <Typography>hello</Typography>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

