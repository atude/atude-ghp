import React from 'react';
import '../components/Components.css';
import '../components/Animations.css';
import { Typography, Grid, Fade, Slide, Grow } from '@material-ui/core';

import HomeCorner1 from '../assets/homebg_corner1.png';
import HomeCorner2 from '../assets/homebg_corner2.png';
import HomeCorner3 from '../assets/homebg_corner3.png';
import HomeCorner4 from '../assets/homebg_corner4.png';
import HomeC1 from '../assets/homebg_c1.png';
import HomeC2 from '../assets/homebg_c2.png';
import HomeC3 from '../assets/homebg_c3.png';
import HomeC4 from '../assets/homebg_c4.png';

class HomePage extends React.Component {
  render() {
    const baseTime = 2000;
    const timePlus = 200;
    return (
      <div className="HomePageParent">
        <img src={HomeCorner4} className="HomeCorner T4" alt="home_corner4"/>
        <img src={HomeCorner3} className="HomeCorner T3" alt="home_corner3"/>
        <img src={HomeCorner2} className="HomeCorner T2" alt="home_corner2"/>
        <img src={HomeCorner1} className="HomeCorner T1" alt="home_corner1"/>
        <img src={HomeC1} className="HomeCircle C1" alt="home_c1"/>
        <img src={HomeC2} className="HomeCircle C2" alt="home_c2"/>
        <img src={HomeC3} className="HomeCircle C3" alt="home_c3"/>
        <img src={HomeC4} className="HomeCircle C4" alt="home_c4"/>

        <div className="HomePageCont">
          <Typography variant="overline"
          style={{color: "rgba(255,255,255,1)", fontSize: "6vh", mixBlendMode: "overlay", 
            lineHeight: "7vh", textAlign: "left", willChange: "opacity"}}>
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