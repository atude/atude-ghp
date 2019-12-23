import React from 'react';
import './Components.css';
import { Typography, Card, CardContent, Grid, Chip, Avatar, Link, Button, Tooltip, } from '@material-ui/core';
import {
  GithubCircle, AccountCircle, AccountSupervisorCircle, Calendar, ShieldLock, 
  ChevronLeftCircle, ChevronRightCircle, DeveloperBoard, CodeNotEqualVariant,
  CodeBracesBox,
} from 'mdi-material-ui';


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

  getDetailsStaticIcon = (role) => {
    const lightGray = this.props.currentScheme.lightGray;

    switch(role.split(" ").splice(-1)[0]) {
      case "Fullstack":
        return <DeveloperBoard className="DetailsIconRight" style={{color: lightGray}}/>;
      case "Solo":
        return <AccountCircle className="DetailsIconRight" style={{color: lightGray}}/>;
      case "Frontend":
        return <CodeNotEqualVariant className="DetailsIconRight" style={{color: lightGray}}/>;
      case "Backend":
        return <CodeNotEqualVariant className="DetailsIconRight" style={{ color: lightGray }} />;
      case "Calendar":
        return <Calendar className="DetailsIconRight" style={{ color: lightGray }} />;
      default:
        return <AccountSupervisorCircle className="DetailsIconRight" style={{color: lightGray}}/>;
    }
  }

  getBanner = (bgColor, projectBanner, viewtext, viewicon, gitlink, viewlink) => {
    return (
      <div style={{ height: "320px", backgroundColor: bgColor }}>
        {projectBanner.map((banner, i) => (
          <img
            key={`${banner}_${i}_banner`}
            alt={`${banner}_${i}_banner`}
            style={{ opacity: this.state.bannerIndex === i ? 1 : 0 }}
            className="BannerImg"
            src={banner}
          />
        ))}
                  
        <Button className="BannerLeft" onClick={() => this.bannerControl(-1, projectBanner.length)}>
          <ChevronLeftCircle style={{ color: "white", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))" }} />
        </Button>
        <Button className="BannerRight" onClick={() => this.bannerControl(1, projectBanner.length)}>
          <ChevronRightCircle style={{ color: "white", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))" }} />
        </Button>

        <div className="BannerShortcutsCont">
          <div className="ViewLink">
            <Chip
              style={{ height: "30px" }}
              label={
                <Typography style={{ fontSize: "11px" }} variant="button">
                  {viewtext}
                </Typography>
              }
              avatar={<Avatar>{viewicon}</Avatar>}
              component="a"
              clickable
              href={viewlink}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
          <div className="ViewLink">
            <Chip
              style={{ height: "30px" }}
              label={
                <Typography style={{ fontSize: "11px" }} variant="button">
                  Find on Github
                  </Typography>
              }
              avatar={<Avatar><GithubCircle /></Avatar>}
              component="a"
              clickable
              href={gitlink}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        {/* Banner carousel dots */}
        <Grid className="BannerDots" container spacing={16} direction="row" alignItems="center" justify="center">
          {projectBanner.map((banner, i) => (
            <Grid item key={`${banner}_${i}_dot`}
              style={{
                opacity: this.state.bannerIndex === i ? 1 : 0.5,
                transition: "all 0.5s ease",
                filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))"
              }}>
              <svg height="10" width="10">
                <circle fill="white" cx="3" cy="3" r="3" />
              </svg>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  getHeadings = (projectIcon, viewlink, accColor, heading, lightGray, subheading) => {
    return (
      <div className="ProjectCardTextContent">
        {projectIcon}
        <Typography component="a" href={viewlink} target="_blank" rel="noopener noreferrer"
        style={{color: accColor, fontSize: "28px", textDecoration: "none"}} variant="h1">
          {heading}
        </Typography>
        <div style={{marginTop: "2px"}}>
          <Typography className="ProjectCardSubheader"
            style={{fontSize: "14px", color: lightGray, letterSpacing: "0px"}}
            variant="body1">
              {subheading}
          </Typography>
        </div>
        <br/>
      </div>
    );
  }

  getDetailsSectionLeft = (categoryText, categoryStyle, rightPadding, items) => {
    return (
      <Grid item>
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <Grid item>
            <Typography style={{...categoryStyle, paddingRight: rightPadding}} variant="button">
              {categoryText}
            </Typography>
          </Grid> 
          {items}
        </Grid>
      </Grid>
    );
  }

  getDetailsSectionRight = (text, tooltipText, categoryStyle, rightPadding, icon) => {
    console.log(window.innerWidth);
    return (
      <Grid item>
        <Grid container direction="row" alignItems="center"
        >
          <Grid item>
            <Typography style={{...categoryStyle, paddingRight: rightPadding}}
              variant="button" className="ProjectRightText">
              {text}
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title={tooltipText}>
              {icon}
            </Tooltip>
          </Grid>
        </Grid> 
      </Grid>
    );
  }

  getDetailsContainer = (categoryStyle, platforms, date, built, tools, role, team, detailsRightJustify) => {
    return (
      <Grid container
        direction="row"
      >
        <Grid item xs={12} sm={6} container direction="column">
          {this.getDetailsSectionLeft("PLATFORMS", categoryStyle, 10,
            Object.keys(platforms).map(item => (
              <Grid key={item} item className="DetailsIconLeft">{platforms[item]}</Grid>
            ))
          )}
          {this.getDetailsSectionLeft("LANGUAGES", categoryStyle, 10,
            Object.keys(built).map(item => (
              <Grid key={item} item className="DetailsIconLeft">{built[item]}</Grid>
            ))
          )}
          {this.getDetailsSectionLeft("TECH STACK", categoryStyle, 8,
            Object.keys(tools).map(item => (
              <Grid key={item} item className="DetailsIconLeft">{tools[item]}</Grid>
            ))
          )}
        </Grid>
        <Grid item xs={12} sm={6} container direction="column" justify="flex-start" alignItems={detailsRightJustify}>
          {this.getDetailsSectionRight(date, "Date", categoryStyle, 1, this.getDetailsStaticIcon("Calendar"))}
          {this.getDetailsSectionRight(role, "Role", categoryStyle, 1, this.getDetailsStaticIcon(role))}
          {this.getDetailsSectionRight(team, "Team", categoryStyle, 1, this.getDetailsStaticIcon(team))}
        </Grid>
        
      </Grid>
    );
  }

  render() {
    const { 
      projectIcon, projectBanner, heading, subheading, tools, team, 
      built, platforms, date, achievements, bgColor, accColor,
      gitlink, viewlink, privacylink, viewtext, viewicon, body, role, 
      mainColor, currentScheme, 
    } = this.props;

    const lightGray = currentScheme.lightGray;
    const categoryStyle = { fontSize: "14px", color: lightGray, letterSpacing: "0px" };
    const detailsRightJustify = window.innerWidth < 600 ? "flex-start" : "flex-end";

    return (
      <Card className="ProjectCard">
        {this.getBanner(bgColor, projectBanner, viewtext, viewicon, gitlink, viewlink)}
        <div className="ProjectCardContent">
          <CardContent>
            {this.getHeadings(projectIcon, viewlink, accColor, heading, lightGray, subheading)}
            {this.getDetailsContainer(categoryStyle, platforms, date, built, tools, role, team, detailsRightJustify)}

            <br/>
            
            {/* Achievements */}
            {achievements.length > 0 && 
              <>
                <Typography style={{color: mainColor, paddingBottom: "4px"}} variant="button">
                  Achievements
                </Typography>
                {achievements.map(achievement => (
                  <Chip 
                    key={achievement}
                    style={{
                      height: "30px", 
                      marginTop: "4px", 
                      padding: "4px",
                      backgroundColor: accColor,
                    }} 
                    label={
                      <Typography style={{fontSize: "12px", color: "#fff"}} variant="button">
                        {achievement}
                      </Typography>
                    }
                  />
                ))}
              </>
             }
            {achievements.length > 0 && <><br /><br /></>}
            
            {/* About */}
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