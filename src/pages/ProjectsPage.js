import React from 'react';
import '../components/Components.css';
import TxtChunks from '../assets/txtchunks'

import { Grid } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import icDevote from '../assets/ic_devote.png';
import icBeams from '../assets/ic_beams.png';
import bnDevote from '../assets/banner_devote.png'
import bnBeams from '../assets/banner_beams.png';
import { Android, Monitor, Cellphone, GooglePlay, Youtube } from 'mdi-material-ui';

class ProjectsPage extends React.Component {

  render() {
    const platformIconColor = {color: "#757575"};
    return (
      <div>
        <Grid container direction="row" spacing={40} alignItems="baseline" justify="center">
          <Grid item lg={6} sm={12}>
            <ProjectCard
              projectIcon={<img src={icDevote} alt="ic_devote" className="ProjectCardIcon"/>}
              projectBanner={bnDevote}
              heading="Devote" 
              subheading="Study Management App" 
              platforms={[<Android fontSize="small" style={platformIconColor}/>]}
              gitlink="https://github.com/atude/devote"
              viewlink="https://play.google.com/store/apps/details?id=com.cyberscopes.devote"
              viewicon={<GooglePlay/>}
              viewtext="Available on the Play Store"
              body={TxtChunks["Devote"]}
              role="Solo"
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <ProjectCard
              projectIcon={<img src={icBeams} alt="ic_beams" className="ProjectCardIcon"/>}
              projectBanner={bnBeams}
              heading="Beams" 
              subheading="Suburb Analysis Webapp" 
              platforms={[<Monitor fontSize="small" style={platformIconColor}/>]}
              gitlink="https://github.com/atude/beams"
              viewlink="https://youtu.be/vWZBiD6iriM"
              viewicon={<Youtube/>}
              viewtext="View on Youtube"
              body={TxtChunks["Beams"]}
              role="Lead Front End"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectsPage;