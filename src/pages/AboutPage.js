import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid, Avatar, Fade, Slide, Fab, Tooltip } from '@material-ui/core';
import { HumanGreeting, CubeOutline, CodeBraces, FileDownload } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'
import imgProfile from '../assets/profile.jpg'
import SkillsContent from '../components/SkillsContent';
import ToolsContent from '../components/ToolsContent';


class AboutPage extends React.Component {
  state = {
    transitionDone: false,
    isAvatarLoad: false,
  }
  
  setTransition = () => {
    this.setState({transitionDone: true});
  }

  render() {    
    const mainColor = this.props.mainColor;
    const tBase = 700;
    const tAdd = 300;

    return (
      <Fade in timeout={600}>
        <div>
          <Grid container direction="row" spacing={40} alignItems="center" justify="center"
          style={{overflow: this.state.transitionDone ? "inherit" : "hidden"}}>

          <Grid item>
            <Fade in={this.state.isAvatarLoad} timeout={600}>
              <Avatar src={imgProfile} alt="profile"
                style={{width: 200, height: 200, margin: 20}} onLoad={() => (this.setState({isAvatarLoad: true}))}/> 
            </Fade>
          </Grid>

          <Grid item lg={8} md={8} sm={10} xs={12}>
            <Slide in timeout={tBase}>
            <ContentCard mainColor={mainColor}
              headingIcon={<HumanGreeting style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
              heading="Hi! I'm Moz!" 
              body={TxtChunks["About me"]}
            />
            </Slide>
          </Grid>
    
          <Grid item lg={10} md={10} sm={10} xs={12}>
            <Slide in timeout={tBase+tAdd*1} direction="up" onEntered={this.setTransition}>
            <ContentCard mainColor={mainColor}
              headingIcon={<CodeBraces style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
              heading="Programming Experience" 
              body={""}
              content={<SkillsContent/>}
            />
            </Slide>
          </Grid>

          <Grid item lg={10} md={10} sm={10} xs={12}>
            <Slide in timeout={tBase+tAdd*2} direction="up" onEntered={this.setTransition}>
            <ContentCard mainColor={mainColor}
              headingIcon={<CubeOutline style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
              heading="Software Tools" 
              body={""}
              content={<ToolsContent/>}
            />
            </Slide>
          </Grid>
          </Grid>
          {console.log(TxtChunks["Resume"])}

        
          <div className="DownloadFAB">
            <Tooltip title="View/Download Resume" placement="left">
              <Fab size="medium" component="a" href={TxtChunks["Resume"]} 
              download="_resume_mozamel_anwary" aria-label="DownloadResume"
              style={{color: "white", backgroundColor: mainColor, opacity: "0.8"}}>
                <FileDownload />
              </Fab>
            </Tooltip>
          </div>
        </div>
      </Fade>
    );
  }
}

export default AboutPage;