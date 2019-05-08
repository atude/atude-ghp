import React from 'react';
import './Components.css';
import { Typography, Card, CardMedia, CardContent, Grid, Chip, Avatar } from '@material-ui/core';
import { GithubCircle, Account, AccountGroup, Calendar } from 'mdi-material-ui';

const lightGray = "#757575";

class ProjectCard extends React.Component {

  render() {
    const { projectIcon, projectBanner, heading, subheading, tools, built, platforms, date,
      gitlink, viewlink, viewtext, viewicon, body, role } = this.props;
    return (
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
              <Grid item className="ProjectHeadLeft">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography style={{fontSize: "15px", color: lightGray}} variant="button">PLATFORMS&nbsp; | </Typography>
                  </Grid>            
                  
                  {Object.keys(platforms).map(item => (
                    <Grid key={item} item className="PlatformIcon">{platforms[item]}</Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <Calendar style={{float: "right", color: lightGray}}/>
                <Typography style={{fontSize: "14px", color: lightGray}} 
                  variant="button" className="ProjectRightText">
                  {date}
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item className="ProjectHeadLeft">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography style={{fontSize: "15px", color: lightGray}} variant="button">LANGUAGES&nbsp; | </Typography>
                  </Grid>
                  {Object.keys(built).map(item => (
                        <Grid key={item} item className="PlatformIcon">{built[item]}</Grid>
                      ))}
                </Grid>
              </Grid>
              <Grid item>
                {role === "Solo" 
                  ? <Account style={{float: "right", color: lightGray}}/>
                  : <AccountGroup style={{float: "right", color: lightGray}}/>
                }

                <Typography style={{fontSize: "14px", color: lightGray}} 
                  variant="button" className="ProjectRightText">
                  {role}
                </Typography>
              </Grid>
            </Grid>
            

            <Grid container direction="row" justify="flex-start" alignItems="center">
              <Grid item>
                <Typography inline className="ToolsText" style={{fontSize: "15px", color: lightGray}} variant="button">
                  TOOLS&nbsp; 
                </Typography>
                <Typography inline style={{fontSize: "15px", color: lightGray}} variant="button">
                  | 
                </Typography>
              </Grid>
              {Object.keys(tools).map(item => (
                    <Grid key={item} item className="PlatformIcon">{tools[item]}</Grid>
                  ))}
            </Grid>

            <br/>
            {/* Body */}
            <Typography id="CustomScroll" className="ProjectBodyText" style={{fontSize: "14px"}} variant="body1">
              {body}
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;