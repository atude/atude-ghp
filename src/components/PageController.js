import React from 'react';
import './Components.css';
import ContentCard from './ContentCard.js';
import { Grid, Avatar } from '@material-ui/core';
import { HumanGreeting, CubeOutline } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'
import imgProfile from '../assets/profile.jpg'
import SkillsContent from './SkillsContent';

const avatarScale = 200;
class PageController extends React.Component {

  render() {
    return (
      <div className="MainContentCont">
      <Grid container direction="row" spacing={40} alignItems="center" justify="center">

      <Grid item>  
        <Avatar src={imgProfile} alt="profile"
          style={{width: avatarScale, height: avatarScale, margin: 20}}/> 
      </Grid>

      <Grid item md={8} sm={6}>
        <ContentCard 
          headingIcon={<HumanGreeting color="primary" fontSize="large" className="ContentCardHeadIcon"/>}
          heading="Hi! I'm Mozamel Anwary" 
          body={TxtChunks["About me"]}
        />
      </Grid>

      <Grid item xs={12} sm={10}>
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

export default PageController;