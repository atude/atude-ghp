import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid, Avatar } from '@material-ui/core';
import { HumanGreeting, CubeOutline } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'
import imgProfile from '../assets/profile.jpg'
import SkillsContent from '../components/SkillsContent';

class AboutPage extends React.Component {

  render() {
    return (
      <div>
        <Grid container direction="row" spacing={40} alignItems="center" justify="center">

        <Grid item>  
          <Avatar src={imgProfile} alt="profile"
            style={{width: 200, height: 200, margin: 20}}/> 
        </Grid>

        <Grid item md={8} sm={6}>
          <ContentCard 
            headingIcon={<HumanGreeting color="primary" fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Hi! I'm Mozamel Anwary" 
            body={TxtChunks["About me"]}
          />
        </Grid>
  
        <Grid item md={10} sm={6}>
          <ContentCard 
            headingIcon={<CubeOutline color="primary" fontSize="large" className="ContentCardHeadIcon"/>}
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