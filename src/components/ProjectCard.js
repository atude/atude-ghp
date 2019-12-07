import React from 'react';
import './Components.css';
import { Typography, Card, CardContent, Grid, Chip, Avatar, Link, Button, } from '@material-ui/core';
import { GithubCircle, AccountCircle, AccountSupervisorCircle, Calendar, ShieldLock, 
  ChevronLeftCircle, ChevronRightCircle, DeveloperBoard, CodeNotEqualVariant, CodeBracesBox } from 'mdi-material-ui';

class ProjectCard extends React.Component {
  state = {
    bannerIndex: 0,
    isTransitioning: false,
  }

  bannerControl = (i, len) => {
    if(!this.state.isTransitioning){
      if(len - 1 === this.state.bannerIndex && i >= 0) i = -(len - 1);
      if(0 === this.state.bannerIndex && i <= 0) i = len - 1;
      this.setState({
        bannerIndex: this.state.bannerIndex + i,
      });
    }
  }

  getRoleIcon = (role) => {
    const lightGray = this.props.currentScheme.lightGray;

    switch(role.split(" ").splice(-1)[0]) {
      case "Fullstack":
        return <DeveloperBoard className="RoleIcon" style={{color: lightGray}}/>;
      case "Solo":
        return <AccountCircle className="RoleIcon" style={{color: lightGray}}/>;
      case "Frontend":
        return <CodeNotEqualVariant className="RoleIcon" style={{color: lightGray}}/>;
      case "Backend":
        return <CodeNotEqualVariant className="RoleIcon" style={{color: lightGray}}/>;
      default:
        return <AccountSupervisorCircle className="RoleIcon" style={{color: lightGray}}/>;
    }
  }

  render() {
    const { projectIcon, projectBanner, heading, subheading, tools, team, built, platforms, date, bgColor, accColor,
      gitlink, viewlink, privacylink, viewtext, viewicon, body, role, mainColor, currentScheme } = this.props;

    const lightGray = currentScheme.lightGray;
    const categoryStyle = {fontSize: "14px", color: lightGray, letterSpacing: "0px"};

    return (
      <Card className="ProjectCard">
        
        <div style={{height: "320px", backgroundColor: bgColor}}>
          {projectBanner.map((banner, i) => (
            <img key={`${banner}_${i}_banner`} alt={`${banner}_${i}_banner`} style={{opacity: this.state.bannerIndex === i ? 1 : 0}} 
            className="BannerImg" src={banner}/>
          ))}
                    
          <Button className="BannerLeft" onClick={() => this.bannerControl(-1, projectBanner.length)}>
            <ChevronLeftCircle style={{color: "white", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))"}}/>
          </Button>
          <Button className="BannerRight"  onClick={() => this.bannerControl(1, projectBanner.length)}>
            <ChevronRightCircle style={{color: "white", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))"}}/>
          </Button>

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

          {/* Banner carousel dots */}
          <Grid className="BannerDots" container spacing={16} direction="row" alignItems="center" justify="center">
            {projectBanner.map((banner, i) => (
              <Grid key={`${banner}_${i}_dot`} item style={{opacity: this.state.bannerIndex === i ? 1 : 0.5, 
              transition: "all 0.5s ease", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))"}}>
                <svg height="10" width="10">
                  <circle fill="white" cx="3" cy="3" r="3"/>
                </svg>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="ProjectCardContent">

          <CardContent>
            <div className="ProjectCardTextContent">
             {/* Heading */}
            {projectIcon}
              <Typography component="a" href={viewlink} target="_blank" rel="noopener noreferrer"
              style={{color: accColor, fontSize: "28px", textDecoration: "none"}} variant="h1">
                {heading}
              </Typography>
              <Typography className="CaptionText" style={categoryStyle} 
                variant="body1">
                {subheading}
              </Typography>
              <br/>
            </div>

             {/* Platforms */}
             <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item className="ProjectHeadLeft">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography style={categoryStyle} variant="button">PLATFORMS&nbsp; | </Typography>
                  </Grid>            
                  {Object.keys(platforms).map(item => (
                    <Grid key={item} item className="PlatformIcon">{platforms[item]}</Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Calendar item */}
              <Grid item>
                <Calendar className="RoleIcon" style={{color: lightGray}}/>
                <Typography style={categoryStyle}
                  variant="button" className="ProjectRightText">
                  {date}
                </Typography>
              </Grid>
            </Grid>

            {/* Languages */}
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item className="ProjectHeadLeft">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Grid item>
                    <Typography style={categoryStyle} variant="button">LANGUAGES&nbsp; |</Typography>
                  </Grid>
                  {Object.keys(built).map(item => (
                    <Grid key={item} item className="PlatformIcon">{built[item]}</Grid>
                  ))}
                </Grid>
              </Grid>
            {/* Role */}
              <Grid item>
                {this.getRoleIcon(role)}
                <Typography style={categoryStyle}
                  variant="button" className="ProjectRightText">
                  {role}
                </Typography>
              </Grid>
            </Grid>
            
            {/* Tools */}
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                  <Typography className="ToolsText" style={categoryStyle} variant="button">
                    TOOLS
                  </Typography>
                  <Typography style={categoryStyle} variant="button">|</Typography>
                {Object.keys(tools).map(item => (
                  <Grid key={item} item className="PlatformIcon">{tools[item]}</Grid>
                ))}
                </Grid>
              </Grid>
            {/* Team */}
              <Grid item>
                {this.getRoleIcon(team)}
                <Typography style={categoryStyle}
                  variant="button" className="ProjectRightText">
                  {team}
                </Typography>
              </Grid>
            </Grid>

            <br/>
            <Typography style={{color: mainColor, paddingBottom: "4px"}} variant="button">
              ABOUT
            </Typography>
            {/* Body */}
            <Typography style={{fontSize: "14px"}} variant="body1">
              {body}
            </Typography>

            {privacylink !== "" &&
              <div className="PrivacyText">
                <Link href={privacylink} target="_blank" ref="noopener noreferrer" style={{textDecoration: "none"}}>
                  <ShieldLock style={{float: "right", color: mainColor, fontSize: "18px", marginLeft: "3px"}}/>
                  <Typography inline style={{fontSize: "11px", color: mainColor, float: "left"}} variant="button">
                    Privacy policy
                  </Typography>
                </Link>
              </div>
            }

          </CardContent>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;