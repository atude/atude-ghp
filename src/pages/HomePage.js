import React from 'react';
import '../components/Components.css';
import { Typography, Grid } from '@material-ui/core';

class HomePage extends React.Component {

  render() {
    return (
      <Grid container spacing={12} className="HomePageCont" direction="column" justify="center" alignItems="flex-start">
        <Grid item className="HomeName">
          <Typography style={{color: "#000000", fontSize: "60px", lineHeight: "80px", textAlign: "left"}} 
            variant="overline">
              Mozamel<br/><b>Anwary</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="button" color="primary" style={{fontSize: "18px"}}>
            Software Engineer | Design
          </Typography>
        </Grid>
      
      </Grid>
    );
  }
}

export default HomePage;