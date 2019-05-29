import React from 'react';
import '../components/Components.css';
import '../components/Animations.css';
import { Typography, Grid, Fade, Slide, Grow, Tooltip } from '@material-ui/core';
import { React as ReactIcon, MaterialUi, } from 'mdi-material-ui';

import HomeCorner1 from '../assets/homebg_corner1.png';
import HomeCorner2 from '../assets/homebg_corner2.png';
import HomeCorner3 from '../assets/homebg_corner3.png';
import HomeCorner4 from '../assets/homebg_corner4.png';
import HomeC1 from '../assets/homebg_c1.png';
import HomeC2 from '../assets/homebg_c2.png';
import HomeC3 from '../assets/homebg_c3.png';
import HomeC4 from '../assets/homebg_c4.png';

class HomePage extends React.Component {
  state = {
    loadCount: 0,
    isLoaded: false,
  }

  checkLoaded = () => {
    this.setState({loadCount: ++this.state.loadCount});

    if(this.state.loadCount >= 8)
      this.setState({isLoaded: true});
  }

  render() {
    const baseTime = 1500;
    const timePlus = 200;
    const isLoaded = this.state.isLoaded;
    const { currentScheme } = this.props;

    return (
      <div className="HomePageParent">
        <Fade in={isLoaded} timeout={baseTime}><img onLoad={this.checkLoaded} src={HomeCorner4} className="HomeCorner T4" alt="home_corner4"/></Fade>
        <Fade in={isLoaded} timeout={baseTime+(timePlus*2)}><img onLoad={this.checkLoaded} src={HomeCorner3} className="HomeCorner T3" alt="home_corner3"/></Fade>
        <Fade in={isLoaded} timeout={baseTime+(timePlus*8)}><img onLoad={this.checkLoaded} src={HomeCorner2} className="HomeCorner T2" alt="home_corner2"/></Fade>
        <Fade in={isLoaded} timeout={baseTime+(timePlus*16)}><img onLoad={this.checkLoaded} src={HomeCorner1} className="HomeCorner T1" alt="home_corner1"/></Fade>
        <Fade in={isLoaded} timeout={baseTime}><img onLoad={this.checkLoaded} src={HomeC1} className="HomeCircle C1" alt="home_c1"/></Fade>
        <Fade in={isLoaded} timeout={baseTime+(timePlus*2)}><img onLoad={this.checkLoaded} src={HomeC2} className="HomeCircle C2" alt="home_c2"/></Fade>
        <Fade in={isLoaded} timeout={baseTime+(timePlus*8)}><img onLoad={this.checkLoaded} src={HomeC3} className="HomeCircle C3" alt="home_c3"/></Fade>
        <Fade in={isLoaded} timeout={baseTime+(timePlus*16)}><img onLoad={this.checkLoaded} src={HomeC4} className="HomeCircle C4" alt="home_c4"/></Fade>

        <div className="HomePageCont">
          <Typography variant="overline" style={{ 
            fontSize: "6vh", 
            lineHeight: "7vh", textAlign: "left", willChange: "opacity", 
            color: this.state.isLoaded ? "#ffffff" : "#000000",
            opacity: "0.8",
            transition: "all 1s ease"}}>
              Mozamel<br/><b>Anwary</b>
          </Typography>
        
          <Typography variant="button" style={{
            color: this.state.isLoaded ? "#ffffff" : "#000000",
            opacity: "0.8",
            transition: "all 1s ease", 
            fontSize: "2vh"}}>
              Software Engineer | Design
          </Typography>
        </div>
        
        <Tooltip disableFocusListener title="Powered by React | MaterialUI" placement="left">
          <div className="BuiltCont">
            <ReactIcon style={{color: currentScheme.bgInv}}/><br/>
            <MaterialUi style={{color: currentScheme.bgInv}}/>
          </div>
        </Tooltip>
      </div>
    );
  }
}

export default HomePage;