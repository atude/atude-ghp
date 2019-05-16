import React from 'react';
import '../components/Components.css';
import { Typography, Grid } from '@material-ui/core';

import HomeCorner from '../assets/homebg_corner.png';
import HomeC1 from '../assets/homebg_c1.png';
import HomeC2 from '../assets/homebg_c2.png';
import HomeC3 from '../assets/homebg_c3.png';
import HomeC4 from '../assets/homebg_c4.png';

class HomePage extends React.Component {

  render() {
    return (
      <div className="HomePageParent">
        <img src={HomeCorner} className="HomeCorner" alt="home_corner"/>
        <img src={HomeC1} className="HomeC1" alt="home_c1"/>
        <img src={HomeC2} className="HomeC2" alt="home_c2"/>
        <img src={HomeC3} className="HomeC3" alt="home_c3"/>
        <img src={HomeC4} className="HomeC4" alt="home_c4"/>

        <div className="HomePageCont">
          <Typography variant="overline"
          style={{color: "#ffffff", mixBlendMode: "overlay", fontSize: "6vh", 
            lineHeight: "7vh", textAlign: "left"}}>
              Mozamel<br/><b>Anwary</b>
          </Typography>
        
          <Typography variant="button" style={{color: "#ffffff", mixBlendMode: "overlay", fontSize: "2vh"}}>
            Software Engineer | Design
          </Typography>
        </div>
        
      </div>
    );
  }
}

export default HomePage;