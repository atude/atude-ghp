import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu, Github, Linkedin, EmailBox, ThemeLightDark } from 'mdi-material-ui';
import { 
  createMuiTheme, 
  Typography, 
  IconButton, 
  SwipeableDrawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Hidden, 
  CssBaseline, 
  MuiThemeProvider,
  Drawer, 
  Divider, 
  Grid, 
  AppBar, 
  Toolbar, 
  Switch as SwitchButton 
} from '@material-ui/core';

import icAtude from '../assets/ic_atude.png';

import colorSetLight from '../assets/colorsetdark.json';
import colorSetDark from '../assets/colorset.json';

import '../App.css'

import Database from '../assets/Database'
// import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import ProjectsPage from '../pages/ProjectsPage.js';
import ContactPage from '../pages/ContactPage';
// import BlogPage from '../pages/BlogPage';

import { getRoutes } from '../Routes';
import { Link } from 'react-scroll'
import { debounce, throttle } from '../utils/generic';
import { bottomGutter } from '../utils/layouts';
import HomePage from '../pages/HomePage';

const iconSize = "40px";

/* Colors */
const drawerWidth = 340;
var mainColor = "#555555";
const secondaryColor = "#342E37";

const lightScheme = {
  "bg": "#ffffff",
  "bgInv": "#000000",
  "bgSecond": "#fafafa",
  "lightGray": "#555",
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
  "bg": "#101010",
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

const ResponsiveDrawer = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentScheme, setCurrentScheme] = useState(lightScheme);
  const [isDark, setDark] = useState(false);
  const [locationId, setLocationId] = useState();

  // Scroll based anchor routing
  useEffect(() => {
    const handleScroll = () => {
      // Set css --scroll property

      // Set hash routing based on scroll
      const anchorSections = document.getElementsByClassName("ReferenceAnchor");
      for (const thisSection of anchorSections) {
        const top = window.pageYOffset;
        const dist = top - thisSection.offsetTop;
        if (dist < 700 && dist > -200 && window.location.hash !== `#${thisSection.id}`) {
          if (thisSection.id === "mozamel-main") {
            setHashRoute("");
          } else {
            setHashRoute(thisSection.id);
          }
          break;
        }
      }
    }

    const setCssScrollProperty = () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    window.addEventListener('scroll', debounce(handleScroll, 100), false);
    window.addEventListener('scroll', throttle(setCssScrollProperty, 150), false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', setCssScrollProperty);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Set dark theme on load
    const getIsDark = localStorage.getItem("isDark");
    switchDark(getIsDark === "Dark" ? true : false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setHashRoute = (sectionId) => {
    window.history.replaceState(null, null, `#${sectionId}`);
    setTimeout(() => setLocationId(sectionId), 100);
  };

  const switchDark = (isDarkVal) => {
    localStorage.setItem("isDark", isDarkVal ? "Dark" : "Light");
    setDark(isDarkVal);
    setCurrentScheme(isDarkVal ? darkScheme : lightScheme);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabClick = (sectionId) => {
    if (mobileOpen) {
      handleDrawerToggle();
    }
  }

  const getColor = (sectionId) => {
    const route = getRoutes(currentScheme)[sectionId];
    if (route) {
      return route.color;
    }

    return currentScheme.colorSet.blue;
  }

  const getIcon = (sectionId) => {
    const route = getRoutes(currentScheme)[sectionId];
    if (route) {
      return route.icList;
    }
    return null;
  }

  const getSideHead = () => (
    <div className="SidebarHead">
    <Grid container direction="column" alignItems="stretch" justify="center">
      <Grid item >
        <Link to="mozamel-main" smooth="true" style={{ textDecoration: "none" }} offset={-150}>
          <div style={{ cursor: "pointer" }} onClick={() => handleTabClick()}>
            <img 
              src={icAtude} 
              alt="Atude" 
              className="SidebarIconHead" 
              style={{ filter: !isDark ? "invert(100%)" : "invert(0)" }}
            />
            <Typography 
              className="SidebarNameText" 
              style={{ fontSize: "24px", lineHeight: "32px", textAlign: "right" }} 
              variant="overline" 
              color="textPrimary"
            >
              Mozamel<br/><b>Anwary</b>
            </Typography>
          </div>
        </Link>
      </Grid>
        
      <Grid item>
      <Grid container direction="row" alignItems="stretch" justify="space-around">
        <Grid item>
          <IconButton key="Github" component="a"
            href={Database.Contact.Links.GitHub[0]} target="_blank" rel="noopener noreferrer"
          >
            <Github className="DrawerIconButton" style={{ fontSize: iconSize }}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton key="LinkedIn" component="a"
            href={Database.Contact.Links.LinkedIn[0]} target="_blank" rel="noopener noreferrer"
          >
            <Linkedin className="DrawerIconButton" style={{ fontSize: iconSize }}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton 
            key="Email" 
            component="a"
            href={`mailto:${Database.Contact.Contact.Email}`}
          >
            <EmailBox 
              className="DrawerIconButton" 
              style={{ fontSize: iconSize }}
            />
          </IconButton>
        </Grid>
      </Grid>
      </Grid>
    </Grid>
    </div>      
  );

  const getSideListObject = (sectionId, thisColor, header) => (
    <Link to={sectionId} smooth="true" style={{ textDecoration: "none" }} offset={-50}>
      <ListItem 
        button 
        className="SideListItem"
        onClick={() => handleTabClick(sectionId)} 
        key={header}
      >
        <ListItemIcon 
          className="SideListItem"
          style={{ 
            color: locationId === sectionId && thisColor 
          }}
        >
          {getIcon(sectionId)}
        </ListItemIcon>
        <ListItemText 
          primary={
            <Typography 
              color="textPrimary"
              style={{ color:  locationId === sectionId && thisColor }} 
              variant="button">
                {header}
            </Typography>
          }
        />
      </ListItem>
    </Link>
  );
  
  const getSideList = () => (
    <List>
      <Divider/>
      {getSideListObject("about-me", getColor("about-me"), "About Me")}
      {getSideListObject("projects", getColor("projects"), "Projects")}
      {/* {getSideListObject(currPath, "/blog", getColor(currPath), "Research Blog")} */}
      {getSideListObject("contact", getColor("contact"), "Contact")}    
    </List>  
  );

  const drawer = () => {
    return (
      <div style={{backgroundColor: currentScheme.bg}} className="Sidebar">
      <MuiThemeProvider theme={currentScheme.muiSidebarTheme}>
        {getSideHead()}
        {getSideList()}
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>
            <SwitchButton 
              color="primary" 
              checked={isDark} 
              onChange={() => switchDark(!isDark)}/>
            </Grid>
          <Grid item>
            <ThemeLightDark 
              style={{ color: "#cccccc", marginTop: "4px" }}
            />
          </Grid>
        </Grid>
        <Typography className="CopyrightText" variant="button" style={{fontSize: "10px", color: "#cccccc"}}>
          Mozamel Anwary © 2020
        </Typography>
        
      </MuiThemeProvider>
      </div>
    );
  };

  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={currentScheme.muiTheme}>
        <CssBaseline />
        <AppBar 
          position="fixed" 
          className={classes.appBar}
          style={{
            boxShadow: "none", 
            backgroundColor: "transparent", 
            borderRadius: "0px 0px 30px 30px"
          }}
        >
          <Toolbar>
            <IconButton 
              color="inherit"
              onClick={handleDrawerToggle} 
              className={classes.menuButton}
              style={{
                marginTop: "16px",
                backgroundColor: currentScheme.bg,
                opacity: 0.85
              }}
            >
              <Menu style={{ color: getColor(locationId) }}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <SwipeableDrawer
              container={props.container}
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              onOpen={handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
            >
              {drawer()}
            </SwipeableDrawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }}
              variant="permanent" open>
              {drawer()}
            </Drawer>
          </Hidden>
        </nav>

        <div className="MainContentCont">
          <HomePage 
            sectionId="mozamel-main"
            isDark={isDark} 
            currentScheme={currentScheme} 
            mainColor={getRoutes(currentScheme)["about-me"].color}
          />
          <AboutPage 
            sectionId="about-me"
            isDark={isDark} 
            currentScheme={currentScheme} 
            mainColor={getRoutes(currentScheme)["about-me"].color}
            prevColor={getRoutes(currentScheme)["about-me"].prevColor}
          />
          <br /><br />
          <ProjectsPage 
            sectionId="projects"
            isDark={isDark} 
            currentScheme={currentScheme} 
            mainColor={getRoutes(currentScheme)["projects"].color}
            prevColor={getRoutes(currentScheme)["projects"].prevColor}
          />
          <br /><br />
          <ContactPage 
            sectionId="contact"
            isDark={isDark} 
            currentScheme={currentScheme} 
            mainColor={getRoutes(currentScheme)["contact"].color}
            prevColor={getRoutes(currentScheme)["contact"].prevColor}
          />
          <div style={{ marginBottom: `${bottomGutter}px` }}/>
        </div>

      </MuiThemeProvider>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default (withStyles(styles, { withTheme: true })(ResponsiveDrawer));