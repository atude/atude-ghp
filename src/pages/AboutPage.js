import React, { useState } from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid, Avatar, Fade, Fab, Tooltip } from '@material-ui/core';
import { HumanGreeting, CubeOutline, CodeBraces, FileDownload } from 'mdi-material-ui';
import Database from '../assets/Database';
import SkillsContent from '../components/SkillsContent';
import ToolsContent from '../components/ToolsContent';

import imgProfile from '../assets/profile.jpg';
import { getRoutes } from '../Routes';
import AnchoredSubheading from '../components/AnchoredSubheading';

const AboutPage = (props) => {
  const [isAvatarLoad, setAvatarLoad] = useState(false);
  const { mainColor, currentScheme, isDark, sectionId } = props;

  return (
    <div>
      <AnchoredSubheading 
        id={sectionId}
        color={getRoutes(currentScheme)[sectionId].color}
        title={getRoutes(currentScheme)[sectionId].title}
        icon={getRoutes(currentScheme)[sectionId].icAppbar}
        currentScheme={currentScheme}
      />
      <Grid container direction="row" spacing={24} alignItems="center" justify="center">
        <Grid item >
          <Fade in={isAvatarLoad} timeout={700}>
            <Avatar src={imgProfile} alt="profile"
              style={{
                width: 200, height: 200, margin: 20,
              }} 
              onLoad={() => setAvatarLoad(true)}
            /> 
          </Fade>
          {/* <div className="AvatarBgCircle" style={{marginLeft: 0.1 * yPos}}/>
          <div className="AvatarBgCircle2" style={{marginTop: -200 - 0.1 * yPos}}/>
          <div className="AvatarBgCircle3" style={{marginLeft: 40 - 0.1 * yPos}}/> */}
        </Grid>

        <Grid item lg={9} sm={12} xs={12}>
          <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
            headingIcon={<HumanGreeting style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Hi, I'm Moz!" 
            body={Database["About me"]}
          />
        </Grid>
  
        <Grid item xs={12}>
          <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
            headingIcon={<CodeBraces style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Programming Experience" 
            body={""}
            content={<SkillsContent currentScheme={currentScheme}/>}
          />
        </Grid>

        <Grid item xs={12}>
          <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
            headingIcon={<CubeOutline style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Software Technologies" 
            body={""}
            content={<ToolsContent currentScheme={currentScheme}/>}
          />
        </Grid>
      </Grid>
    
      <div className="FAB">
        <Tooltip title="View/Download Resume" placement="left">
          <Fab size="medium" component="a" href={Database["Resume"]} 
          download="_resume_mozamel_anwary" aria-label="DownloadResume"
          style={{color: "white", backgroundColor: mainColor, opacity: "0.8"}}>
            <FileDownload/>
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}

export default AboutPage;