import React from 'react';
import { Route, Link, NavLink, HashRouter, Switch } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, AccountBox, Buffer, GithubBox, LinkedinBox, EmailBox } from 'mdi-material-ui';
import { createMuiTheme, Typography, IconButton, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, Hidden, CssBaseline, MuiThemeProvider, Drawer, Divider, Grid, AppBar, Toolbar, } from '@material-ui/core';

import icAtude from '../assets/ic_atude_dark.png';

import '../App.css'
import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import ProjectsPage from '../pages/ProjectsPage.js';

const drawerWidth = 340;
const secondaryColor = "#342E37"

const colorSet = {
  "purple": "#a100f6", 
  "red": "#ff1c68", 
  "blue": "#198fe3", 
  "green": "#14d790",
}

//Abandon most UI from using mui colors,
//Use custom set variable colors
var mainColor = colorSet.purple;
const drawerBG = "#ffffff";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: mainColor,
      text: "#ffffff",
    },
    secondary: {
      main: secondaryColor,
    },

    error: {
      main: "#ffffff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: { useNextVariants: true },
});

const muiSidebarTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  typography: { useNextVariants: true },
});

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down('md')]: {
      width: `100%`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'inherit',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    selected: "",
    mobileOpen: false,
    location: "/",
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleTabClick = (tab, loc, setColor) => {
    if(this.state.mobileOpen) this.handleDrawerToggle();
    this.setState({selected: tab, location: loc});
    mainColor = setColor;
  }

  getTitle = (type) => {
    switch(type){
      case "/about": return "About Me";
      case "/projects": return "My Projects";
      default: return "";
    }
  }

  getIcon = (isAppbar, type) => {
    var cStyle, cClass;
    
    if(isAppbar) {
      cClass = "AppbarIcon";
      cStyle = {fontSize: "80px", color: mainColor};
    } else {
      cClass = "ListIcon"
      cStyle = null;
    }

    switch(type){
      case "/about": 
        return <AccountBox style={cStyle} className={cClass}/>;
      case "/projects": 
        return <Buffer style={cStyle} className={cClass}/>;
      default: return <div/>;
    }
  }

  render() {
    const { classes } = this.props;
    const home = "/";
    var currentLocation = this.state.location;
    console.log(this.state.location);
    console.log(this.props);

    const getSideHead = (
      <div className="SidebarHead">
        <Link to="/" style={{textDecoration: "none"}} onClick={() => this.handleTabClick("", "/", colorSet.purple)}>
          <img src={icAtude} alt="icAtude" className="SidebarIconHead"/>
          <Typography style={{fontSize: "24px", lineHeight: "32px", textAlign: "right"}} 
            variant="overline" color="textPrimary">
              Mozamel<br/><b>Anwary</b>
          </Typography>
        </Link>
        <br/><br/><br/>

        <Grid container direction="row" alignItems="stretch" justify="space-around">
          <a href="https://github.com/atude" target="_blank" rel="noopener noreferrer" 
          style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton key="Github">
              <GithubBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
          <a href="https://www.linkedin.com/in/mozamel-a-b211b4114/" target="_blank" rel="noopener noreferrer" 
          style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton key="LinkedIn">
              <LinkedinBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
          <a href="mailto:mozamel.anwary1@gmail.com" rel="noopener noreferrer" 
          style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton key="Email">
              <EmailBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
        </Grid>
      </div>      
    );
    
    const getSideList = (
      <List>
        <Divider/>
        <NavLink to="/about" style={{textDecoration: "none"}}>
          <ListItem selected={this.state.selected === "About Me"} button className="SideListItem"
          onClick={() => 
            this.handleTabClick("About Me", "/about", colorSet.blue)} 
          key="About Me">
            <ListItemIcon style={{color: currentLocation === "/about" && mainColor}}
              className="SideListItem">{this.getIcon(false, "/about")}</ListItemIcon>
            <ListItemText primary={<Typography style={{color: currentLocation === "/about" && mainColor}} 
              variant="button">About Me</Typography>}/>
          </ListItem>
        </NavLink>

        <NavLink to="/projects" style={{textDecoration: "none"}}>
          <ListItem selected={this.state.selected === "My Projects"} button className="SideListItem"
          onClick={() => 
            this.handleTabClick("My Projects", "/projects", colorSet.red)} 
          key="My Projects">
            <ListItemIcon style={{color: currentLocation === "/projects" && mainColor}} 
              className="SideListItem">{this.getIcon(false, "/projects")}</ListItemIcon>
            <ListItemText primary={<Typography style={{color: currentLocation === "/projects" && mainColor}} 
              variant="button">My Projects</Typography>}/>
          </ListItem>
        </NavLink>
    
      </List>  
    );     

    const drawer = (
      <div style={{backgroundColor: drawerBG}} className="Sidebar">
      <MuiThemeProvider theme={muiSidebarTheme}>
        {getSideHead}
        {getSideList}
      </MuiThemeProvider>
      </div>
    );

    return (
      <HashRouter basename="/">
        <div className={classes.root}>
        <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}
        style={{boxShadow: "none", backgroundColor: "#fafafa"}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer"
              onClick={this.handleDrawerToggle} className={classes.menuButton}>
              <Menu style={{color: mainColor}}/>
            </IconButton>
              <Typography className="AppbarText" style={{fontSize: "24px", color: mainColor}} variant="h2" inline>
                {this.getTitle(currentLocation)}
              </Typography>
              {this.getIcon(true, currentLocation)}
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <SwipeableDrawer
              container={this.props.container}
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              onOpen={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </SwipeableDrawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper,}}
              variant="permanent" open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
          
          <div className="MainContentCont">
            <Switch>
              <Route exact path="/" render={() => <HomePage mainColor={mainColor}/>}/>
              <Route path="/about" render={() => <AboutPage mainColor={mainColor}/>}/>
              <Route path="/projects" render={() => <ProjectsPage mainColor={mainColor}/>}/>
            </Switch>
          </div>

          </MuiThemeProvider>
        </div>
      </HashRouter>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default 
      (withStyles(styles, { withTheme: true })(ResponsiveDrawer)
  );