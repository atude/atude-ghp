import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, AccountBox, Buffer, GithubBox, LinkedinBox, EmailBox } from 'mdi-material-ui';
import { createMuiTheme, Typography, IconButton, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, Hidden, CssBaseline, MuiThemeProvider, Drawer, Divider, Grid, AppBar, Toolbar, } from '@material-ui/core';

import icAtude from '../assets/ic_atude.png';

import '../App.css'
import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import ProjectsPage from '../pages/ProjectsPage.js';

const drawerWidth = 340;
const mainColor = "#3C91E6"
const secondaryColor = "#342E37"
const secondaryLight = "#D3D4D9"

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
    typography: { useNextVariants: true },
  },
});

const muiSidebarTheme = createMuiTheme({
  palette: {
    type: "dark",
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
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    zIndex: 100000000000000,
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
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleTabClick = (tab) => {
    if(this.state.mobileOpen) this.handleDrawerToggle();
    this.setState({selected: tab});
  }

  getTitle = (type) => {
    switch(type){
      case "/atude-ghp/about": return "About Me";
      case "/atude-ghp/projects": return "My Projects";
      default: return;
    }
  }

  getIcon = (isAppbar, type) => {
    var cStyle, cClass;
    
    if(isAppbar) {
      cClass = "AppbarIcon";
      cStyle = {fontSize: "80px"};
    } else {
      cClass = "ListIcon"
      cStyle = null;
    }

    switch(type){
      case "/atude-ghp/about": 
        return <AccountBox style={cStyle} className={cClass}/>;
      case "/atude-ghp/projects": 
        return <Buffer style={cStyle} className={cClass}/>;
      default: return;
    }
  }

  render() {
    const { classes } = this.props;
    var currentLocation = window.location.pathname;
    console.log(currentLocation);

    const getSideHead = (
      <div className="SidebarHead">
        <img src={icAtude} alt="icAtude" className="SidebarIconHead"/>
        <Typography style={{fontSize: "24px", lineHeight: "32px", textAlign: "right"}} 
          variant="overline" color="textPrimary">
            Mozamel<br/><b>Anwary</b>
        </Typography>
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
        <Link to="/about" style={{textDecoration: "none"}}>
        <ListItem selected={this.state.selected === "About Me"} button className="SideListItem"
        onClick={() => this.handleTabClick("About Me")} key="About Me">
          <ListItemIcon className="SideListItem">{this.getIcon(false, "/atude-ghp/about")}</ListItemIcon>
          <ListItemText primary={<Typography variant="button">About Me</Typography>}/>
        </ListItem>
        </Link>

        <Link to="/projects" style={{textDecoration: "none"}}>
        
        <ListItem selected={this.state.selected === "My Projects"} button className="SideListItem"
        onClick={() => this.handleTabClick("My Projects")} key="My Projects">
          <ListItemIcon className="SideListItem">{this.getIcon(false, "/atude-ghp/projects")}</ListItemIcon>
          <ListItemText primary={<Typography variant="button">My Projects</Typography>}/>

        </ListItem>
        
        </Link>
    
      </List>  
    );     

    const drawer = (
      <div style={{backgroundColor: secondaryColor}} className="Sidebar">
      <MuiThemeProvider theme={muiSidebarTheme}>
        {getSideHead}
        {getSideList}
      </MuiThemeProvider>
      </div>
    );

    return (
      <Router basename="/atude-ghp">
        <div className={classes.root}>
        <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer"
              onClick={this.handleDrawerToggle} className={classes.menuButton}>
              <Menu/>
            </IconButton>
            <Typography className="AppbarText" style={{fontSize: "24px"}} variant="h2" color="inherit" inline>
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
              <Route exact path="/" render={() => <HomePage/>}/>
              <Route path="/about" render={() => <AboutPage/>}/>
              <Route path="/projects" render={() => <ProjectsPage/>}/>
            </Switch>
          </div>

          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);