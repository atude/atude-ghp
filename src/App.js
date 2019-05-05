import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { AppBar, Typography, IconButton, Button, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, Divider, ListItemIcon, Collapse, Paper, } from '@material-ui/core';
import { Menu, AccountBox, Buffer, ChevronDown, ChevronUp, } from 'mdi-material-ui';
import icAtude from './assets/ic_atude.png'

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
    const getSideHead = 
      <div className="SidebarHead">
        <img src={icAtude} alt="icAtude" className="SidebarIconHead"/>
        <Typography style={{fontSize: "24px", lineHeight: "32px", textAlign: "right"}} 
          variant="overline" color="textPrimary">
            Mozamel<br/><b>Anwary</b>
        </Typography>
        <br/>
      </div>       

    const getSideList = 
      <List>
        <ListItem button key="About Me">
          <ListItemIcon>{this.getIcon(0)}</ListItemIcon>
          <ListItemText primary="About Me"/>
        </ListItem>

        <ListItem button onClick={this.handleClick} key="My Projects">
          <ListItemIcon>{this.getIcon(1)}</ListItemIcon>
          <ListItemText primary="My Projects"/>
          {this.state.open 
            ? <ChevronDown color="secondary"/> 
            : <ChevronUp  color="secondary"/>}
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
    
    return (
      <div>
      <MuiThemeProvider theme={themeSidebar}>
      <SwipeableDrawer variant="permanent"
      anchor="left"
      open={this.state.sidebarState}
      onClose={this.toggleDrawer('sidebarState', false)}
      onOpen={this.toggleDrawer('sidebarState', true)}>
        <div tabIndex={0} role="button" className="Sidebar"
          onClose={this.toggleDrawer('sidebarState', false)} 
          onKeyDown={this.toggleDrawer('sidebarState', false)}>
          <div className="Sidebar">
            {getSideHead}
            <Divider/>
            {getSideList}
          </div>
        </div>
      </SwipeableDrawer>
      </MuiThemeProvider>

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
