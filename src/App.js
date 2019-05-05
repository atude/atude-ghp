import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { AppBar, Typography, IconButton, Button, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, Divider, ListItemIcon, Collapse, } from '@material-ui/core';
import { Menu, AccountBox, Buffer, ChevronDown, ChevronUp, } from 'mdi-material-ui';

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
  },
});

class App extends Component {  
  constructor(props) {
    super(props);    
  }

  state = {
    sidebarState: false,
    open: false,
  }

  toggleDrawer = (side, state) => () => {
    this.setState({
      [side]: state,
    });
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getIcon = (index) => {
    switch(index){
      case 0: return <AccountBox/>;
      case 1: return <Buffer/>;
    }
  }

  render() {
    const sideList = (
      <div className="Sidebar">
        <List>
          <ListItem button key="About Me">
            <ListItemIcon>{this.getIcon(0)}</ListItemIcon>
            <ListItemText primary="About Me"/>
          </ListItem>

          <ListItem button onClick={this.handleClick} key="My Projects">
            <ListItemIcon>{this.getIcon(1)}</ListItemIcon>
            <ListItemText primary="My Projects"/>
            {this.state.open ? <ChevronDown/> : <ChevronUp/>}
          </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <ListItemText inset primary="Devote"/>
              </ListItem>
            </List>
            </Collapse>
        </List>       
      </div>
    );

    return (
      <div>
      <MuiThemeProvider theme={theme}>
     
      <AppBar style={{zIndex: "100000"}} position="relative">
        <Toolbar>
          <IconButton onClick={this.toggleDrawer('sidebarState', !this.state.sidebarState)} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Mozamel Anwary
          </Typography>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer open={this.state.sidebarState}
      onClose={this.toggleDrawer('sidebarState', false)}
      onOpen={this.toggleDrawer('sidebarState', true)}>
        <div tabIndex={0} role="button"
          onClose={this.toggleDrawer('sidebarState', false)} onKeyDown={this.toggleDrawer('sidebarState', false)}>
          {sideList}
        </div>
      </SwipeableDrawer>

      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
