import React from 'react';
import './Components.css';
import { Grid, Typography, Divider, } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { LanguageC, LanguageCsharp, LanguageHtml5, LanguageCss3, LanguageJavascript, LanguagePython } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'

class SkillsContent extends React.Component {

  getIconSkills = (type) => {
    const cStyle = {fontSize: "30px"};
    const cClass = "SkillsListIcon";

    switch(type){
      case "C": return <LanguageC style={cStyle} className={cClass}/>;
      case "C#": return <LanguageCsharp style={cStyle} className={cClass}/>;
      case "JS": return <LanguageJavascript style={cStyle} className={cClass}/>;
      case "HTML": return <LanguageHtml5 style={cStyle} className={cClass}/>;
      case "Python": return <LanguagePython style={cStyle} className={cClass}/>;
      default: return;
    }
  }

  getSkillRow = (skillsList) => {

    return(
      <div>
        {skillsList.map(item => (
          
          <Grid className="SkillRowCont" item xs>
          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={24}>
            <Grid item>
              {this.getIconSkills(item)}
            </Grid>
            <Grid item xs>
              <Typography style={{paddingBottom: "3px"}} variant="button">
                {TxtChunks["Skills Experience"][item]}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography id="label" variant="caption">
                {TxtChunks["Skills Level Frame"][TxtChunks["Skills Level"][item]]}
              </Typography>
              <Slider disabled style={{width: "200"}} 
              value={TxtChunks["Skills Level"][item]}
              min={0} max={4}
              aria-labelledby="label"
              className="SkillSlider"
              >
              </Slider>
            </Grid>
          </Grid>
          </Grid>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="SkillsContainer">
      <Grid container direction="column">
        {this.getSkillRow(TxtChunks["Skillset"])}
      </Grid>

      </div>
    );
  }
}

export default SkillsContent;