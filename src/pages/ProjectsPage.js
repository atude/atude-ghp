import React from 'react';
import '../components/Components.css';
import TxtChunks from '../assets/txtchunks'
import { Grid, Tooltip, Typography, Fade, Slide } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import ReactSVG from 'react-svg'

import icDevote from '../assets/ic_devote.svg';
import icBeams from '../assets/ic_beams.svg';

import bnDevote from '../assets/banner_devote.png'
import bnDevote1 from '../assets/banner_devote1.png'
import bnDevote2 from '../assets/banner_devote2.png'
import bnDevote3 from '../assets/banner_devote3.png'
import bnDevote4 from '../assets/banner_devote4.png'
import bnDevote5 from '../assets/banner_devote5.png'

import bnBeams from '../assets/banner_beams.png';
import bnBeams1 from '../assets/banner_beams1.png';
import bnBeams2 from '../assets/banner_beams2.png';
import bnBeams3 from '../assets/banner_beams3.png';
import bnBeams4 from '../assets/banner_beams4.png';


import { Android, DesktopMacDashboard, Cellphone, GooglePlay, Youtube, LanguageCsharp,  LanguageC, LanguageJavascript, 
  React as ReactIcon, LanguageHtml5, LanguageCss3, Unity } from 'mdi-material-ui';

const miniIconColor = {color: "#757575"};

class ProjectsPage extends React.Component {
  state = {
    transitionDone: false,
  }

  getMiniIcons = (types) => {
    var iconList = [];
    types.map(item => {
      switch (item) {
        case "Android": iconList.push(<Tooltip disableFocusListener title={item}>
          <Android fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "PC": iconList.push(<Tooltip disableFocusListener title={item}>
          <DesktopMacDashboard fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "C": iconList.push(<Tooltip disableFocusListener title={item}>
          <LanguageC fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "C#": iconList.push(<Tooltip disableFocusListener title={item}>
          <LanguageCsharp fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "JavaScript": iconList.push(<Tooltip disableFocusListener title={item}>
          <LanguageJavascript fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "React.js": iconList.push(<Tooltip disableFocusListener title={item}>
          <ReactIcon fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "HTML": iconList.push(<Tooltip disableFocusListener title={item}>
          <LanguageHtml5 fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "CSS": iconList.push(<Tooltip disableFocusListener title={item}>
          <LanguageCss3 fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "Unity Engine": iconList.push(<Tooltip disableFocusListener title={item}>
          <Unity fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
      
        default: break;
      }
    })

    return iconList;
  }

  getViewIcon = (type) => {
    switch(type) {
      case "Google Play": return <GooglePlay/>;
      case "Youtube": return <Youtube/>;
      default: return;
    }
  }

  getProjMedia = (type) => {
    switch(type) {
      case "Devote": return icDevote;
      case "Beams": return icBeams;
      default: return;
    }
  }

  getProjBanners = (type) => {
    switch(type) {
      case "Devote": return [bnDevote, bnDevote1, bnDevote2, 
        bnDevote3, bnDevote4, bnDevote5];
      case "Beams": return [bnBeams, bnBeams1, bnBeams2,
        bnBeams3, bnBeams4];
      default: return;
    }
  }

  setTransition = () => {
    this.setState({transitionDone: true});
  }

  render() {
    const projects = TxtChunks["Projects"];
    const mainColor = this.props.mainColor;
    const tBase = 700;
    const tAdd = 300;
    var transitionDone = this.state.transitionDone;

    return (
      <div>
        <Grid container direction="row" spacing={24} alignItems="stretch" justify="center" 
        style={{overflowY: transitionDone ? "inherit" : "hidden"}}>
        {Object.values(projects).map((item, i) => (
          <Grid key={item.heading} item lg={6} md={6} sm={12} xs={12}>
            <Slide direction="up" in mountOnEnter timeout={tBase+(i*tAdd)} 
            onEntered={i === Object.values(projects).length ? this.setTransition : void(0)}>
              <ProjectCard mainColor={mainColor} style={{padding: "2px"}}
                projectIcon={
                  <Typography component="span" style={{color: item.accColor}}>
                  <ReactSVG className="ProjectIconColor" svgClassName="ProjectCardIcon" src={this.getProjMedia(item.heading)}/>
                  </Typography>
                }
                bgColor={item.bgColor}
                accColor={item.accColor}
                projectBanner={this.getProjBanners(item.heading)}
                heading={item.heading} 
                subheading={item.subheading}  
                tools={this.getMiniIcons(item.tools)}
                built={this.getMiniIcons(item.built)}
                date={item.date}
                platforms={this.getMiniIcons(item.platforms)}
                gitlink={item.gitlink}  
                viewlink={item.viewlink} 
                privacylink={item.privacylink}
                viewicon={this.getViewIcon(item.viewicon)}
                viewtext={item.viewtext} 
                role={item.role} 
                body={item.body} 
              />
            </Slide>
          </Grid>
        ))}
        </Grid>
      </div>
    );
  }
}

export default ProjectsPage;