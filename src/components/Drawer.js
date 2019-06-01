import React from 'react';
import { Route, Link, NavLink, HashRouter, Switch } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, AccountBox, Buffer, GithubBox, LinkedinBox, EmailBox, MessageBulleted, ThemeLightDark } from 'mdi-material-ui';
import { createMuiTheme, Typography, IconButton, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, Hidden, CssBaseline, MuiThemeProvider, Drawer, Divider, Grid, AppBar, Toolbar, Switch as SwitchButton } from '@material-ui/core';
import { TransitionGroup, } from 'react-transition-group';

import icAtudeDark from '../assets/ic_atude.png';
import icAtude from '../assets/ic_atude_dark.png';

import colorSetLight from '../assets/colorsetdark.json';
import colorSetDark from '../assets/colorset.json';

import '../App.css'
import Database from '../assets/Database'
import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import ProjectsPage from '../pages/ProjectsPage.js';
import ContactPage from '../pages/ContactPage';

//My consts
/* Colors */
const drawerWidth = 340;
var mainColor = colorSetLight.purple;
const secondaryColor = "#342E37";

const lightScheme = {
  "bg": "#ffffff",
  "bgInv": "#000000",
  "bgSecond": "#fafafa",
  "lightGray": "#757575",
  "muiTheme": createMuiTheme({
    palette: {
      type: "light",
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
  }),
  "muiSidebarTheme" : createMuiTheme({
    palette: {
      type: "light",
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
  }),
  "colorSet": colorSetLight,
}

const darkScheme = {
  "bg": "#000000",
  "bgInv": "#ffffff",
  "bgSecond": "#303030",
  "lightGray": "#e5e5e5",
  "muiTheme": createMuiTheme({
    palette: {
      type: "dark",
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
  }),
  "muiSidebarTheme" : createMuiTheme({
    palette: {
      type: "dark",
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
  }),
  "colorSet": colorSetDark,
}

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
    mobileOpen: false,
    currentScheme: lightScheme,
    isDark: false,
  };

  componentDidMount() {
    this.switchDark(false);
  }

  switchDark = (isDark) => {
    this.setState({
      currentScheme: isDark ? darkScheme : lightScheme,
      isDark: isDark,
    })
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleTabClick = (tab) => {
    if(this.state.mobileOpen) this.handleDrawerToggle();
    this.setState({selected: tab});
  }

  getPaths = (path) => {
    /* Object References */
    let paths = {
      "/":
      {
        "title": "",
        "color": this.state.currentScheme.colorSet.purple,
      },
      "/about": 
      {
        "title": "About Me",
        "color": this.state.currentScheme.colorSet.blue,
        "icAppbar": <AccountBox style={{fontSize: "80px", color: this.state.currentScheme.colorSet.blue}} className="AppbarIcon"/>,
        "icList": <AccountBox className="ListIcon"/>,
      },
      "/projects": 
      {
        "title": "Projects",
        "color": this.state.currentScheme.colorSet.red,
        "icAppbar": <Buffer style={{fontSize: "80px", color: this.state.currentScheme.colorSet.red}} className="AppbarIcon"/>,
        "icList": <Buffer className="ListIcon"/>,
      },
      "/contact": 
      {
        "title": "Contact",
        "color": this.state.currentScheme.colorSet.purple,
        "icAppbar": <MessageBulleted style={{fontSize: "80px", color: this.state.currentScheme.colorSet.purple}} className="AppbarIcon"/>,
        "icList": <MessageBulleted className="ListIcon"/>,
      },
    }

    return paths;
  }

  getTitle = (path) => {
    return this.getPaths(path)[path].title;
  }

  getColor = (path) => {
    return this.getPaths(path)[path].color;
  }

  getIcon = (isAppbar, path) => {
    if(isAppbar) return this.getPaths(path)[path].icAppbar;
    return this.getPaths(path)[path].icList;
  }

  getSideHead = () => {
    return (
      <div className="SidebarHead">
      <Grid container direction="column" alignItems="stretch" justify="center">
        <Grid item>
        <Link to="/" style={{textDecoration: "none"}} onClick={() => this.handleTabClick("", "/")}>
          <img src={icAtude} alt="icAtude" className="SidebarIconHead" 
          style={{filter: this.state.isDark ? "invert(100%)" : ""}}/>
          <Typography style={{fontSize: "24px", lineHeight: "32px", textAlign: "right"}} 
            variant="overline" color="textPrimary">
              Mozamel<br/><b>Anwary</b>
          </Typography>
        </Link>
        </Grid>
          
        <Grid item>
        <Grid container direction="row" alignItems="stretch" justify="space-around">
          <a href={Database.Contact.Links.GitHub} target="_blank" rel="noopener noreferrer" 
          style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton key="Github">
              <GithubBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
          <a href={Database.Contact.Links.LinkedIn} target="_blank" rel="noopener noreferrer" 
          style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton key="LinkedIn">
              <LinkedinBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
          <a href={Database.Contact.Links.Email} rel="noopener noreferrer" 
          style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton key="Email">
              <EmailBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
        </Grid>
        </Grid>
      </Grid>
      </div>      
    );
  };

  getSideListObject = (currPath, path, thisColor, header) => {
    return (
      <NavLink to={path} style={{textDecoration: "none"}}>
        <ListItem selected={this.state.selected === header} button className="SideListItem"
        onClick={() => 
          this.handleTabClick(header, path)} 
        key={header}>
          <ListItemIcon style={{color: currPath === path && thisColor}}
            className="SideListItem">{this.getIcon(false, path)}</ListItemIcon>
          <ListItemText primary={<Typography style={{color: currPath === path && thisColor}} 
            variant="button">{header}</Typography>}/>
        </ListItem>
      </NavLink>
    );
  }
  
  getSideList = (currPath) => {
    return (
      <List>
        <Divider/>
        {this.getSideListObject(currPath, "/about", this.getColor(currPath), "About Me")}
        {this.getSideListObject(currPath, "/projects", this.getColor(currPath), "Projects")}
        {this.getSideListObject(currPath, "/contact", this.getColor(currPath), "Contact")}    
      </List>  
    );
  };     

  drawer = (currPath) => {
    return (
      <div style={{backgroundColor: this.state.currentScheme.bg}} className="Sidebar">
      <MuiThemeProvider theme={this.state.currentScheme.muiSidebarTheme}>
        {this.getSideHead(currPath)}
        {this.getSideList(currPath)}
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item><Typography variant="button" style={{fontSize: "12px", color: "#cccccc"}}>
            DARK MODE
          </Typography></Grid>
          <Grid item><SwitchButton color="secondary" checked={this.state.isDark} 
          onChange={() => this.switchDark(!this.state.isDark)}/></Grid>
          <Grid item><ThemeLightDark style={{color: "#cccccc", marginTop: "4px"}}/></Grid>
        </Grid>
        <Typography className="CopyrightText" variant="button" style={{fontSize: "10px", color: "#cccccc"}}>
          Atude © 2019
        </Typography>
        
      </MuiThemeProvider>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { currentScheme } = this.state;

    return (
      <HashRouter basename="/">
        {/* Use location for render changes*/}
        <Route render={({location}) => (

          <div className={classes.root}>
          <MuiThemeProvider theme={this.state.currentScheme.muiTheme}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}
          style={{boxShadow: "none", 
            backgroundColor: location.pathname !== "/" ? this.state.currentScheme.bgSecond : "transparent", 
            borderRadius: "0px 0px 30px 30px"}}>
            <Toolbar>
              <IconButton color="inherit" aria-label="Open drawer"
                onClick={this.handleDrawerToggle} className={classes.menuButton}>
                <Menu style={{color: this.getColor(location.pathname)}}/>
              </IconButton>
                <Typography className="AppbarText" style={{fontSize: "24px", color: this.getColor(location.pathname)}} variant="h2" inline>
                  {this.getTitle(location.pathname)}
                </Typography>
                {this.getIcon(true, location.pathname)}
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
                {this.drawer(location.pathname)}
              </SwipeableDrawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer classes={{ paper: classes.drawerPaper,}}
                variant="permanent" open>
                {this.drawer(location.pathname)}
              </Drawer>
            </Hidden>
          </nav>

            <div className="MainContentCont">
              <TransitionGroup>
                <Switch location={location}>
                  <Route exact path="/" render={() => <HomePage isDark={this.state.isDark} currentScheme={currentScheme} mainColor={this.getColor(location.pathname)}/>}/>
                  <Route path="/about" render={() => <AboutPage currentScheme={currentScheme} mainColor={this.getColor(location.pathname)}/>}/>
                  <Route path="/projects" render={() => <ProjectsPage currentScheme={currentScheme} mainColor={this.getColor(location.pathname)}/>}/>
                  <Route path="/contact" render={() => <ContactPage currentScheme={currentScheme} mainColor={this.getColor(location.pathname)}/>}/>
                </Switch>
              </TransitionGroup>
            </div>

          </MuiThemeProvider>
        </div>
        )}/>
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