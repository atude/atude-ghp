import React from 'react';
import '../components/Components.css';
import Database from '../assets/Database'
import { Grid, Tooltip, Typography, Fade, Slide, SvgIcon } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import ReactSVG from 'react-svg'

import icDevote from '../assets/ic_devote.svg';
import icBeams from '../assets/ic_beams.svg';
import icMywam from '../assets/ic_mywam.svg';

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

import bnMywam from '../assets/banner_mywam.png';
import bnMywam1 from '../assets/banner_mywam1.png';
import bnMywam2 from '../assets/banner_mywam2.png';
import bnMywam3 from '../assets/banner_mywam3.png';
import bnMywam4 from '../assets/banner_mywam4.png';

import { 
  Android, 
  GoogleChrome,
  GooglePlay, 
  Youtube, 
  LanguageCsharp,  
  LanguageC, 
  LanguageJavascript, 
  React as ReactIcon, 
  LanguageHtml5, 
  LanguageCss3, 
  Unity, 
  Edge,
  Firefox
} from 'mdi-material-ui';

const viewIcons = {
  "Google Play": <GooglePlay/>,
  "Youtube": <Youtube/>,
}

const projMedia = {
  "Devote": 
  {
    "icon": icDevote,
    "banners": [bnDevote, bnDevote1, bnDevote2, 
      bnDevote3, bnDevote4, bnDevote5],
  },
  "Beams":
  {
    "icon": icBeams,
    "banners": [bnBeams, bnBeams1, bnBeams2,
      bnBeams3, bnBeams4],
  },
  "myWAM":
  {
    "icon": icMywam,
    "banners": [bnMywam, bnMywam1, bnMywam2, bnMywam3,
      bnMywam4],
  }
}

class ProjectsPage extends React.Component {
  state = {
    transitionDone: false,
  }

  getMiniIcons = (types) => {
    var iconList = [];
    const miniIconColor = { color: this.props.currentScheme.lightGray };

    types.map(item => {
      switch (item) {
        case "Android": iconList.push(<Tooltip disableFocusListener title={item}>
          <Android fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "Chrome": iconList.push(<Tooltip disableFocusListener title={item}>
          <GoogleChrome fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "Edge": iconList.push(<Tooltip disableFocusListener title={item}>
          <Edge fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "Firefox": iconList.push(<Tooltip disableFocusListener title={item}>
          <Firefox fontSize="small" style={miniIconColor}/>
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
        case "React": iconList.push(<Tooltip disableFocusListener title={item}>
          <ReactIcon fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "React Native": iconList.push(<Tooltip disableFocusListener title={item}>
          <ReactIcon fontSize="small" style={miniIconColor}/>
          </Tooltip>); break;
        case "Expo": iconList.push(<Tooltip disableFocusListener title={item}>
          <SvgIcon fontSize="small" viewBox="0 0 256 256" style={miniIconColor}>
            <path d="M46 178.5c.3 3.62 1.56 7.24 4.89 12.1 3.94 5.77 10.72 8.94 15.66 3.85 3.34-3.43 39.42-66.5 56.81-90.4a5.18 5.18 0 0 1 8.5 0c17.39 23.9 53.47 86.97 56.8 90.4 4.94 5.09 11.73 1.92 15.67-3.85 3.88-5.68 4.95-9.66 4.95-13.92 0-2.9-56.19-107.49-61.85-116.19-5.45-8.37-7.1-10.2-16.31-10.49h-7.02c-9.21.3-10.87 2.12-16.31 10.49-5.55 8.52-59.55 108.98-61.79 115.87v2.14z"/>
          </SvgIcon>
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
    return viewIcons[type];
  }

  getProjMedia = (type) => {
    return projMedia[type].icon;
  }

  getProjBanners = (type) => {
    return projMedia[type].banners;
  }

  setTransition = () => {
    this.setState({transitionDone: true});
  }

  render() {
    const projects = Database["Projects"];
    const { mainColor, currentScheme } = this.props;
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
              <ProjectCard mainColor={mainColor} style={{padding: "2px"}} currentScheme={currentScheme}
                projectIcon={
                  <Typography component="span" style={{color: item.accColor}}>
                  <ReactSVG className="IconColor" svgClassName="ProjectCardIcon" src={this.getProjMedia(item.heading)}/>
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