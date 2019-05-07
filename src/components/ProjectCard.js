import React from 'react';
import './Components.css';
import { Typography, Card, CardMedia, CardContent, List, ListItem, ListItemText, Grid, Chip, Avatar } from '@material-ui/core';
import { GithubCircle, Account, AccountGroup } from 'mdi-material-ui';

const lightGray = "#757575";

class ProjectCard extends React.Component {

  render() {
    const { projectIcon, projectBanner, heading, subheading, platforms, 
      gitlink, viewlink, viewtext, viewicon, body, role } = this.props;
    return (
      <div>
      <Card className="ProjectCard">
        <div className="BannerShortcutsCont">
          
          <div className="ViewLink">
            <Chip style={{height: "30px"}} label={<Typography style={{fontSize: "11px"}} variant="button">{viewtext}</Typography>}
              avatar={<Avatar>{viewicon}</Avatar>} component="a" clickable href={viewlink} target="_blank" rel="noopener noreferrer"/>
          </div>

          <div className="ViewLink">
            <Chip style={{height: "30px"}}  label={<Typography style={{fontSize: "11px"}} variant="button">Find on Github</Typography>}
              avatar={<Avatar><GithubCircle/></Avatar>} component="a" clickable href={gitlink} target="_blank" rel="noopener noreferrer"/>
          </div>

        </div>

        <CardMedia style={{height: "320px"}} image={projectBanner} title="Banner"/>

        <div className="ProjectCardContent">
          <CardContent>
            <div className="ProjectCardTextContent">
             {/* Heading */}
             {projectIcon}
              <Typography component="a" href={viewlink} target="_blank" rel="noopener noreferrer"
              style={{fontSize: "28px", textDecoration: "none"}} variant="h1" color="primary">
                {heading}
              </Typography>

              <Typography style={{fontSize: "14px"}} variant="caption">
                {subheading}
              </Typography>
              <br/>
            </div>

            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item className="PlatformCont">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography style={{fontSize: "15px", color: lightGray}} variant="button">PLATFORMS | </Typography>
                  </Grid>            
                  
                  {Object.keys(platforms).map(item => (
                    <Grid key={item} item className="PlatformIcon">{platforms[item]}</Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                {role === "Solo" 
                  ? <Account style={{float: "right", color: lightGray}}/>
                  : <AccountGroup style={{float: "right", color: lightGray}}/>
                }

                <Typography style={{fontSize: "14px", color: lightGray, float: "right"}} 
                  variant="button" className="RoleText">
                  {role}
                </Typography>
              </Grid>
            </Grid>

            <br/><br/>
            {/* Body */}
            <Typography style={{fontSize: "14px"}} variant="body1">
              {body}
            </Typography>
          </CardContent>
        </div>
      </Card>
      </div>
    );
  }
}

export default ProjectCard;