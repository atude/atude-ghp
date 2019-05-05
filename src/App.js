import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { AppBar, Typography, IconButton, Button, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, Divider, ListItemIcon, Collapse, Paper, } from '@material-ui/core';
import { Menu, AccountBox, Buffer, ChevronDown, ChevronUp, } from 'mdi-material-ui';
import icAtude from './assets/ic_atude.png';
import DrawerCustom from './components/Drawer.js';

class App extends Component {  
  constructor(props) {
    super(props);    
  }
  render() {
  
    return (
      <div>
        {/* DrawerCustom renders everything, check in Drawer.js 
        for redirects into content pages. */}
        <DrawerCustom/>
      </div>
    );
  }
}

export default App;

