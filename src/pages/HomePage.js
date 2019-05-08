import React from 'react';
import '../components/Components.css';
import { Typography, Grid } from '@material-ui/core';

class HomePage extends React.Component {

  render() {
    return (
      <Grid container className="HomePageCont" direction="row" justify="space-between" alignItems="center">
        <Grid item xs={12} className="HomeName">
          <Typography style={{color: "#000000", fontSize: "60px", lineHeight: "80px", textAlign: "left"}} 
            variant="overline">
              Mozamel<br/><b>Anwary</b>
          </Typography>
          Work in progress! See tabs for more info about me.
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;