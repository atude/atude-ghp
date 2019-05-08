import React from 'react';
import './Components.css';
import { Grid, Typography, Tooltip, } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { LanguageC, LanguageCsharp, LanguageHtml5, LanguageJavascript, LanguagePython } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'

class SkillsContent extends React.Component {

  getIconSkills = (type) => {
    const cStyle = {fontSize: "30px"};
    const cClass = "SkillsListIcon";

    switch(type){
      case "C": return(
      <Tooltip disableFocusListener title="C" placement="left">
        <LanguageC style={cStyle} className={cClass}/>
      </Tooltip>);
      case "C#": return (
      <Tooltip disableFocusListener title="C#" placement="left">
        <LanguageCsharp style={cStyle} className={cClass}/>
      </Tooltip>);
      case "JS": return (
      <Tooltip disableFocusListener title="JavaScript" placement="left">
        <LanguageJavascript style={cStyle} className={cClass}/>
      </Tooltip>);
      case "HTML": return (
      <Tooltip disableFocusListener title="Web Development" placement="left">
        <LanguageHtml5 style={cStyle} className={cClass}/>
      </Tooltip>);
      case "Python": return (
      <Tooltip disableFocusListener title="Python" placement="left">
        <LanguagePython style={cStyle} className={cClass}/>
      </Tooltip>);
      default: return;
    }
  }

  render() {
    const item = TxtChunks["Skillset"];
    return (
      <div className="SkillsContainer">
        <Grid container direction="column">
          {Object.keys(item).map(key => (
            <Grid key={key} className="SkillRowCont" container direction="row" justify="space-evenly" alignItems="center" spacing={24}>
              <Grid item>
                {this.getIconSkills(key)}
              </Grid>
              <Grid item xs={6}>
                <Typography style={{paddingBottom: "3px"}} variant="button">
                  {item[key].experience}
                </Typography>
                
                {item[key].desc !== "" &&
                  <Typography className="CaptionText" style={{fontSize: "12px", color: "#757575"}} variant="body1">
                    {item[key].desc}
                  </Typography>
                }
              </Grid>
              <Grid item xs={4}>
                <Typography id="label" style={{fontSize: "12px", color: "#757575"}} variant="body1">
                  {TxtChunks["Skills Level Frame"][item[key].level]}
                </Typography>
                <Slider disabled
                color="primary"
                style={{width: "200", cursor: "default"}} 
                value={item[key].level}
                min={0} max={4}
                aria-labelledby="label"
                className="SkillSlider"
                >
                </Slider>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default SkillsContent;