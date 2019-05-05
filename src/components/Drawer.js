import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AccountBox, Buffer, ChevronDown, ChevronUp, Menu, GithubBox, LinkedinBox, } from 'mdi-material-ui';
import { createMuiTheme, AppBar, Typography, IconButton, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Hidden, CssBaseline, MuiThemeProvider, Drawer, Divider, Grid, } from '@material-ui/core';
import icAtude from '../assets/ic_atude.png';
import PageController from '../components/PageController.js';

const drawerWidth = 340;
const mainColor = "#D81E5B"
const secondaryColor = "#011936"

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
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
    tab: "About Me",
    mobileOpen: false,
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getIcon = (isAppbar, type) => {
    var cStyle, cClass;
    var renderType = type;
    
    if(isAppbar) {
      cClass = "AppbarIcon";
      cStyle = {fontSize: "100px"};
    } else {
      cClass = "ListIcon"
      cStyle = null;
    }

    if(type === undefined) renderType = this.state.tab;
    switch(renderType){
      case "About Me": 
        return <AccountBox style={cStyle} className={cClass}/>;
      case "My Projects": 
        return <Buffer style={cStyle} className={cClass}/>;
      case "Github":
        return 
      case "LinkedIn":
        return <LinkedinBox style={cStyle} className={cClass}/>
    }
  }

  render() {
    const { classes } = this.props;

    const getSideHead = 
      <div className="SidebarHead">
        <img src={icAtude} alt="icAtude" className="SidebarIconHead"/>
        <Typography style={{fontSize: "24px", lineHeight: "32px", textAlign: "right"}} 
          variant="overline" color="textPrimary">
            Mozamel<br/><b>Anwary</b>
        </Typography>
        <br/><br/><br/>

        <Grid container direction="row" alignItems="stretch" justify="flex-end">
          <a href="https://github.com/atude" target="_blank" style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton button key="Github">
              <GithubBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
          <a href="https://www.linkedin.com/in/mozamel-a-b211b4114/" target="_blank" style={{textDecoration: "none"}}>
          <Grid item>
            <IconButton button key="LinkedIn">
              <LinkedinBox fontSize="large"/>
            </IconButton>
          </Grid>
          </a>
        </Grid>
      </div>       
    
    const getSideList = 
      <List>
        <ListItem button key="About Me">
          <ListItemIcon>{this.getIcon(false, "About Me")}</ListItemIcon>
          <ListItemText primary="About Me"/>
        </ListItem>

        <ListItem button onClick={this.handleClick} key="My Projects">
          <ListItemIcon>{this.getIcon(false, "My Projects")}</ListItemIcon>
          <ListItemText primary="My Projects"/>
          {this.state.open 
            ? <ChevronDown color="primary"/> 
            : <ChevronUp  color="primary"/>}
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

    const drawer = (
      <div className="Sidebar">
      <MuiThemeProvider theme={muiSidebarTheme}>
        {getSideHead}
        <Divider/>
        {getSideList}
      </MuiThemeProvider>
      </div>
    );

    return (
      <div className={classes.root}>
      <MuiThemeProvider theme={muiTheme}>

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer"
              onClick={this.handleDrawerToggle} className={classes.menuButton}>
              <Menu/>
            </IconButton>
            <Typography className="AppbarText" style={{fontSize: "28px"}} variant="h2" color="inherit" noWrap>
              {this.state.tab}
            </Typography>
              {this.getIcon(true)}
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
        
        {/* PageController manages rendering of content per page */}
        <PageController tab={this.state.tab} theme={muiTheme}/>

        </MuiThemeProvider>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);