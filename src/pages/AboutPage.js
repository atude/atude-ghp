import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid, Avatar, createMuiTheme } from '@material-ui/core';
import { HumanGreeting, CubeOutline } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'
import imgProfile from '../assets/profile.jpg'
import SkillsContent from '../components/SkillsContent';

class AboutPage extends React.Component {
  render() {    
    const mainColor = this.props.mainColor;
    return (
      <div>
        <Grid container direction="row" spacing={40} alignItems="center" justify="center">

        <Grid item>  
          <Avatar src={imgProfile} alt="profile"
            style={{width: 200, height: 200, margin: 20}}/> 
        </Grid>

        <Grid item lg={8} md={8} sm={8} xs={12}>
          <ContentCard mainColor={mainColor}
            headingIcon={<HumanGreeting style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Hi! I'm Moz!" 
            body={TxtChunks["About me"]}
          />
        </Grid>
  
        <Grid item lg={10} md={10} sm={10} xs={12}>
          <ContentCard mainColor={mainColor}
            headingIcon={<CubeOutline style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Skills" 
            body={TxtChunks["Skills"]}
            content={<SkillsContent/>}
          />
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default AboutPage;