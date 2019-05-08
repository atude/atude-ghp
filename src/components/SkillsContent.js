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
    const item = TxtChunks["Skillset"];
    return(
      <div>
        {Object.keys(item).map(key => (
          <Grid key={key} className="SkillRowCont" item xs>

          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={24}>
            <Grid item>
              {this.getIconSkills(key)}
            </Grid>
            <Grid item xs>
              <Typography style={{paddingBottom: "3px"}} variant="button">
                {item[key].experience}
              </Typography>
              
              {item[key].desc !== "" &&
                <Typography style={{color: "#757575"}} variant="caption">
                  {item[key].desc}
                </Typography>
              }
            </Grid>
            <Grid item xs>
              <Typography id="label" variant="caption">
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
          </Grid>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="SkillsContainer">
        <Grid container alignItems="stretch" direction="column">
          {this.getSkillRow(Object.keys(TxtChunks["Skillset"]))}
        </Grid>
      </div>
    );
  }
}

export default SkillsContent;