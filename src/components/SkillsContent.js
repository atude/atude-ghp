import React from 'react';
import './Components.css';
import { Grid, Typography, Tooltip } from '@material-ui/core';
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

import Database from '../assets/Database';

const TooltipWrapper = (props) => {
  return (
    <Tooltip
      disableFocusListener 
      title={props.name}
      placement="left"
    >
      {props.children}
    </Tooltip>
  );
};

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
      fontSize: "42px",
      padding: "3px"
    };

    const cClass = "SkillsListIcon Hoverable";
    const defIconColor = this.props.currentScheme.lightGray;

    switch(type) {
      case "C": return (
      <TooltipWrapper name="C" color="#3848AA">
        <LanguageC 
          onMouseEnter={() => {this.setState({onC: true})}}
          onMouseLeave={() => {this.setState({onC: false})}} 
          style={{
            color: this.state.onC ? "#3848AA" : defIconColor,
            padding: this.state.onC ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />
      </TooltipWrapper>);
      case "C#": return (
      <TooltipWrapper name="C#">
        <LanguageCsharp
          onMouseEnter={() => {this.setState({onCsharp: true})}}
          onMouseLeave={() => {this.setState({onCsharp: false})}} 
          style={{
            color: this.state.onCsharp ? "#A077DB" : defIconColor,
            padding: this.state.onCsharp ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize
          }} 
          className={cClass}
        />
      </TooltipWrapper>);
      case "JS": return (
      <Grid container direction="row" alignItems="center">
        <TooltipWrapper name="JavaScript">
          <LanguageJavascript
            onMouseEnter={() => {this.setState({onJavascript: true})}}
            onMouseLeave={() => {this.setState({onJavascript: false})}} 
            style={{
              color: this.state.onJavascript ? "#FFCA28" : defIconColor,
              padding: this.state.onJavascript ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize
            }} 
            className={cClass}
          />
        </TooltipWrapper>
        <TooltipWrapper name="TypeScript">
          <LanguageTypescript
            onMouseEnter={() => {this.setState({onTypescript: true})}}
            onMouseLeave={() => {this.setState({onTypescript: false})}} 
            style={{
              color: this.state.onTypescript ? "#0288D1" : defIconColor,
              padding: this.state.onTypescript ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize
            }} 
            className={cClass}
          />
        </TooltipWrapper>
      </Grid>);
      case "HTML": return (
      <Grid container direction="row" alignItems="center">
        <TooltipWrapper name="HTML5">
          <LanguageHtml5
            onMouseEnter={() => {this.setState({onHtml5: true})}}
            onMouseLeave={() => {this.setState({onHtml5: false})}} 
            style={{
              color: this.state.onHtml5 ? "#EB642D" : defIconColor,
              padding: this.state.onHtml5 ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize,
            }} 
            className={cClass}
          />
        </TooltipWrapper>
        <TooltipWrapper name="CSS3">
          <LanguageCss3
            onMouseEnter={() => {this.setState({onCss3: true})}}
            onMouseLeave={() => {this.setState({onCss3: false})}} 
            style={{
              color: this.state.onCss3 ? "#2Fa5D7" : defIconColor,
              padding: this.state.onCss3 ? 0 : cStyle.padding,
              fontSize: cStyle.fontSize,
            }} 
            className={cClass}
          />
        </TooltipWrapper>
      </Grid>);
      case "Python": return (
      <TooltipWrapper name="Python">
        <LanguagePython
          onMouseEnter={() => {this.setState({onPython: true})}}
          onMouseLeave={() => {this.setState({onPython: false})}} 
          style={{
            color: this.state.onPython ? "#0062B9" : defIconColor,
            padding: this.state.onPython ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />
      </TooltipWrapper>);
      case "Java": return (
      <TooltipWrapper name="Java">
        <LanguageJava
          onMouseEnter={() => {this.setState({onJava: true})}}
          onMouseLeave={() => {this.setState({onJava: false})}} 
          style={{
            color: this.state.onJava ? "#F44336" : defIconColor,
            padding: this.state.onJava ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />
      </TooltipWrapper>);
      case "Bash": return (
      <TooltipWrapper name="Bash">
        <LanguageBash
          onMouseEnter={() => {this.setState({onBash: true})}}
          onMouseLeave={() => {this.setState({onBash: false})}} 
          style={{
            color: this.state.onBash ? "#47B253" : defIconColor,
            padding: this.state.onBash ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />      
      </TooltipWrapper>);
      case "SQL": return (
      <TooltipWrapper name="SQL">
        <LanguageSQL
          onMouseEnter={() => {this.setState({onSQL: true})}}
          onMouseLeave={() => {this.setState({onSQL: false})}} 
          style={{
            color: this.state.onSQL ? "#047885" : defIconColor,
            padding: this.state.onSQL ? 0 : cStyle.padding,
            fontSize: cStyle.fontSize,
          }} 
          className={cClass}
        />      
      </TooltipWrapper>);
      default: return;
    }
  }

  render() {
    const item = Database["Skillset"];
    const { currentScheme } = this.props;
    const lightGray = currentScheme.lightGray;
    
    return (
      <div className="SkillsContainer">
        <Grid container direction="row" spacing={16}>
          {Object.keys(item).map(key => (
            <Grid item xs={6} key={key} container direction="row" justify="space-evenly" alignItems="center">
              <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                {this.getIconSkills(key)}
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8} style={{marginTop: "5px"}}>
                <Typography id="label" style={{fontSize: "12px", color: lightGray}} variant="body1">
                  {Database["Skills Level Frame"][item[key].level]} in {item[key].desc}
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