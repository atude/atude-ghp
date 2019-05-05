import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {blue, indigo, pink, red, } from '@material-ui/core/colors';
import { AppBar, Typography, IconButton, Button, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, Divider, ListItemIcon, } from '@material-ui/core';
import { Menu, AccountBox, Buffer, } from 'mdi-material-ui';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {  
  constructor(props) {
    super(props);    
  }

  state = {
    left: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  getIcon = (index) => {
    switch(index){
      case 0: return <AccountBox/>;
      case 1: return <Buffer/>;
    }
  }

  render() {
    const subjects = [
      'About Me',
      'My Projects'
    ];

    const sideList = (
      <div className="Sidebar">
        <List>
          {subjects.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{this.getIcon(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>       
      </div>
    );

    return (
      <div>
      <MuiThemeProvider theme={theme}>
     
      <AppBar style={{zIndex: "100000"}} position="relative">
        <Toolbar>
          <IconButton onClick={this.toggleDrawer('left', !this.state.left)} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Mozamel Anwary
          </Typography>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer open={this.state.left}
      onClose={this.toggleDrawer('left', false)}
      onOpen={this.toggleDrawer('left', true)}>
        <div tabIndex={0} role="button"
          onClose={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
          {sideList}
        </div>
      </SwipeableDrawer>

      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
