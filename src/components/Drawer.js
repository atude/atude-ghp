import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AccountBox, Buffer, ChevronDown, ChevronUp, Menu, } from 'mdi-material-ui';
import { createMuiTheme, AppBar, Typography, IconButton, Toolbar, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Hidden, CssBaseline, MuiThemeProvider, Drawer, } from '@material-ui/core';
import icAtude from '../assets/ic_atude.png';

const drawerWidth = 330;

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#011936",
    },
    secondary: {
      main: "#2176FF",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
    typography: { useNextVariants: true },
  },
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

  getAppBarIcon = () => {
    switch(this.state.tab){
      case "About Me": return <AccountBox className="AppbarIcon"/>;
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
        <br/>
      </div>       
    
    const getSideList = 
      <List>
        <ListItem button key="About Me">
          <ListItemIcon><AccountBox/></ListItemIcon>
          <ListItemText primary="About Me"/>
        </ListItem>

        <ListItem button onClick={this.handleClick} key="My Projects">
          <ListItemIcon><Buffer/></ListItemIcon>
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

    const drawer = (
      <div>
        {getSideHead}
        {getSideList}
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
            <Typography style={{fontSize: "24px"}} variant="h2" color="inherit" noWrap>
              {this.state.tab}
            </Typography>
            {this.getAppBarIcon}
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
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
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