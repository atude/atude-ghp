import React from 'react';
import '../components/Components.css';
import { Typography, Tooltip, Slide, Grow, } from '@material-ui/core';
import { React as ReactIcon, MaterialUi, } from 'mdi-material-ui';


class HomePage extends React.Component {
  render() {
    const baseTime = 2000;
    const { currentScheme, isDark } = this.props;
    const circleFilters = "hue-rotate(45deg)";
    
    var longshadowStr = "";
    const maxLen = 400;
    for(var i = 0; i < maxLen; i++){
      longshadowStr += `rgba(90, 90, 90, 1) ${i}px ${i}px,`;
    }

    longshadowStr += `rgba(90, 90, 90, 1) ${i}px ${i}px`;

    return (
      <div className="HomePageParent">
        <Grow in timeout={baseTime/1.5}>
        <div>
        <Slide in timeout={baseTime} direction="up">
          <div className="HomePageCont" style={{filter: isDark ? circleFilters : ""}}>
            <div className="HomePageCircle1"/>
            <div className="HomePageCircle2"/>
            <div className="HomePageCircle3"/>
            <div className="HomePageTextMain">
              <Typography variant="button" style={{
                  color: "#ffffff",
                  opacity: "0.8",
                  transition: "all 1s ease", 
                  fontSize: "2vh"}}>
                    Oh hi, i'm
              </Typography>
              <Typography variant="overline" style={{ 
                fontSize: "6vh", 
                lineHeight: "7vh", textAlign: "left", 
                color: "#ffffff",
                opacity: "0.8",
                transition: "all 1s ease",
                textShadow: longshadowStr,
                mixBlendMode: "hard-light",
                }}>
                  Mozamel<br/><b>Anwary</b>
              </Typography>
            
              <Typography variant="button" style={{
                color: "#ffffff",
                opacity: "0.8",
                transition: "all 1s ease", 
                fontSize: "2vh"}}>
                  Software Engineer | Design
              </Typography>
            </div>
          </div>
        </Slide>
        </div>
        </Grow>
        
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