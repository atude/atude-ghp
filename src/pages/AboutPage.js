import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid, Avatar, Fade, Slide } from '@material-ui/core';
import { HumanGreeting, CubeOutline, CodeBraces } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'
import imgProfile from '../assets/profile.jpg'
import SkillsContent from '../components/SkillsContent';
import ToolsContent from '../components/ToolsContent';


class AboutPage extends React.Component {
  state = {
    transitionDone: false,
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
            <Avatar src={imgProfile} alt="profile"
              style={{width: 200, height: 200, margin: 20}}/> 
          </Grid>

          <Grid item lg={8} md={8} sm={8} xs={12}>
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
        </div>
      </Fade>
    );
  }
}

export default AboutPage;