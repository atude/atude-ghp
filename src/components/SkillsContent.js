import React from 'react';
import './Components.css';
import { Grid, Typography, Tooltip, SvgIcon, IconButton, withStyles } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { 
  LanguageC, 
  LanguageCsharp, 
  LanguageHtml5, 
  LanguageCss3, 
  LanguageJavascript, 
  LanguageTypescript, 
  LanguagePython, 
  Bash as LanguageBash,
  Database as LanguageSQL,
  Coffee as LanguageJava,
} from 'mdi-material-ui';
import Database from '../assets/Database'

class SkillsContent extends React.Component {
  state = {
    onC: false,
    onCsharp: false,
    onJavascript: false,
    onTypescript: false,
    onHtml5: false,
    onCss3: false,
    onPython: false,
    onJava: false,
    onSQL: false,
    onBash: false,
  }

  getIconSkills = (type) => {
    const cStyle = { 
      fontSize: "40px",
      padding: "2px"
    };

    const cClass = "SkillsListIcon";

    switch(type) {
      case "C": return(
      <Tooltip disableFocusListener title="C" placement="left">
        <LanguageC 
          onMouseEnter={() => {this.setState({onC: true})}}
          onMouseLeave={() => {this.setState({onC: false})}} 
          style={{
            color: this.state.onC ? "#3848AA" : this.props.currentScheme.bgInv,
            padding: this.state.onC ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />
      </Tooltip>);
      case "C#": return (
      <Tooltip disableFocusListener title="C#" placement="left">
        <LanguageCsharp
          onMouseEnter={() => {this.setState({onCsharp: true})}}
          onMouseLeave={() => {this.setState({onCsharp: false})}} 
          style={{
            color: this.state.onCsharp ? "#A077DB" : this.props.currentScheme.bgInv,
            padding: this.state.onCsharp ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize
          }} 
          className={cClass}
        />
      </Tooltip>);
      case "JS": return (
      <Grid container direction="row" alignItems="center">
        <Tooltip disableFocusListener title="JavaScript" placement="left">
          <LanguageJavascript
            onMouseEnter={() => {this.setState({onJavascript: true})}}
            onMouseLeave={() => {this.setState({onJavascript: false})}} 
            style={{
              color: this.state.onJavascript ? "#FFCA28" : this.props.currentScheme.bgInv,
              padding: this.state.onJavascript ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize
            }} 
            className={cClass}
          />
        </Tooltip>
        <Tooltip disableFocusListener title="TypeScript" placement="left">
          <LanguageTypescript
            onMouseEnter={() => {this.setState({onTypescript: true})}}
            onMouseLeave={() => {this.setState({onTypescript: false})}} 
            style={{
              color: this.state.onTypescript ? "#0288D1" : this.props.currentScheme.bgInv,
              padding: this.state.onTypescript ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize
            }} 
            className={cClass}
          />
        </Tooltip>
      </Grid>);
      case "HTML": return (
      <Grid container direction="row" alignItems="center">
        <Tooltip disableFocusListener title="HTML" placement="left">
          <LanguageHtml5
            onMouseEnter={() => {this.setState({onHtml5: true})}}
            onMouseLeave={() => {this.setState({onHtml5: false})}} 
            style={{
              color: this.state.onHtml5 ? "#EB642D" : this.props.currentScheme.bgInv,
              padding: this.state.onHtml5 ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize,
            }} 
            className={cClass}
          />
        </Tooltip>
        <Tooltip disableFocusListener title="CSS" placement="left">
          <LanguageCss3
            onMouseEnter={() => {this.setState({onCss3: true})}}
            onMouseLeave={() => {this.setState({onCss3: false})}} 
            style={{
              color: this.state.onCss3 ? "#2Fa5D7" : this.props.currentScheme.bgInv,
              padding: this.state.onCss3 ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize,
            }} 
            className={cClass}
          />
        </Tooltip>
      </Grid>);
      case "Python": return (
      <Tooltip disableFocusListener title="Python" placement="left">
        <LanguagePython
          onMouseEnter={() => {this.setState({onPython: true})}}
          onMouseLeave={() => {this.setState({onPython: false})}} 
          style={{
            color: this.state.onPython ? "#0062B9" : this.props.currentScheme.bgInv,
            padding: this.state.onPython ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />
      </Tooltip>);
      case "Java": return (
      <Tooltip disableFocusListener title="Java" placement="left">
        <LanguageJava
          onMouseEnter={() => {this.setState({onJava: true})}}
          onMouseLeave={() => {this.setState({onJava: false})}} 
          style={{
            color: this.state.onJava ? "#F44336" : this.props.currentScheme.bgInv,
            padding: this.state.onJava ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />
      </Tooltip>);
      case "Bash": return (
      <Tooltip disableFocusListener title="Bash" placement="left">
        <LanguageBash
          onMouseEnter={() => {this.setState({onBash: true})}}
          onMouseLeave={() => {this.setState({onBash: false})}} 
          style={{
            color: this.state.onBash ? "#47B253" : this.props.currentScheme.bgInv,
            padding: this.state.onBash ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />      
      </Tooltip>);
      case "SQL": return (
      <Tooltip disableFocusListener title="SQL" placement="left">
        <LanguageSQL
          onMouseEnter={() => {this.setState({onSQL: true})}}
          onMouseLeave={() => {this.setState({onSQL: false})}} 
          style={{
            color: this.state.onSQL ? "#047885" : this.props.currentScheme.bgInv,
            padding: this.state.onSQL ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />      
      </Tooltip>);
      default: return;
    }
  }

  render() {
    const item = Database["Skillset"];
    const { currentScheme } = this.props;
    const lightGray = currentScheme.lightGray;
    
    return (
      <div className="SkillsContainer">
        <Grid container direction="row" spacing={24}>
          {Object.keys(item).map(key => (
            <Grid item xs={6} key={key} container direction="row" justify="space-evenly" alignItems="center">
              <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                {this.getIconSkills(key)}
              </Grid>
              {/* <Grid item xs={10} sm={5} md={5} lg={5} xl={5}>
                <Typography style={{paddingBottom: "3px"}} variant="button">
                  {item[key].experience}
                </Typography>
                
                {item[key].desc !== "" &&
                  <Typography className="CaptionText" style={{fontSize: "12px", color: lightGray}} variant="body1">
                    {item[key].desc}
                  </Typography>
                }
              </Grid> */}
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography id="label" style={{fontSize: "12px", color: lightGray}} variant="body1">
                  {Database["Skills Level Frame"][item[key].level]}
                </Typography>
                <Slider disabled
                thumb={null}
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