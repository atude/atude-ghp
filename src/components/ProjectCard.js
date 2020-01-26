import React from 'react';
import './Components.css';
import { Typography, Card, CardContent, Grid, Chip, Avatar, Link, Button, Tooltip, Divider, IconButton, } from '@material-ui/core';
import {
  GithubCircle, AccountCircle, AccountSupervisorCircle, Calendar, ShieldLock, 
  ChevronLeftCircle, ChevronRightCircle, DeveloperBoard, CodeNotEqualVariant, OpenInNew,
  CheckBold, CheckNetworkOutline,
} from 'mdi-material-ui';

const smBreakpoint = 600;

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerIndex: 0,
      isTransitioning: false,
      width: 0,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
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

  getBanner = (bgColor, projectBanners, viewtext, viewicon, gitlink, viewlink) => {
    return (
      <div style={{ height: "320px", backgroundColor: bgColor }}>
        {projectBanners.map((banner, i) => (
          <img
            key={`${banner}_${i}_banner`}
            alt={`${banner}_${i}_banner`}
            style={{ opacity: this.state.bannerIndex === i ? 1 : 0 }}
            className="BannerImg"
            src={banner}
          />
        ))}
                  
        <Button className="BannerLeft" onClick={() => this.bannerControl(-1, projectBanners.length)}>
          <ChevronLeftCircle style={{ color: "white", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))" }} />
        </Button>
        <Button className="BannerRight" onClick={() => this.bannerControl(1, projectBanners.length)}>
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
          {projectBanners.map((banner, i) => (
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

  getStatus = (status, mainColor) => {
    let statusIcon = null;
    const iconStyle = { float: "left", color: mainColor, fontSize: "18px", marginLeft: "3px" };

    switch (status) {
      case "Completed | Discontinued":
        statusIcon = <CheckBold style={iconStyle}/>
        break;
      default:
        statusIcon = <CheckNetworkOutline style={iconStyle}/>
        break;
    };

    return (
      <div className="StatusContainer">
        {statusIcon}
        <Tooltip title="Project Status" placement="top">
          <Typography inline style={{ float: "right", fontSize: "11px", color: mainColor, marginLeft: "3px" }} variant="button">
            {status}
          </Typography>
        </Tooltip>
      </div>
    );
  }

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
    return (
      <Grid item>
        <Grid container direction="row" alignItems="center">
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

  getDetailsContainer = (categoryStyle, platforms, date, built, tools, role, team) => {
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
        {this.state.width < smBreakpoint && <Divider style={{ width: "100%", marginTop: "15px", marginBottom: "15px" }} />}
        <Grid item xs={12} sm={6} container direction="column" justify="flex-start"
          alignItems={this.state.width < smBreakpoint ? "flex-start" : "flex-end"}>
          {this.getDetailsSectionRight(date, "Date", categoryStyle, 1, this.getDetailsStaticIcon("Calendar"))}
          {this.getDetailsSectionRight(role, "Role", categoryStyle, 1, this.getDetailsStaticIcon(role))}
          {this.getDetailsSectionRight(team, "Team", categoryStyle, 1, this.getDetailsStaticIcon(team))}
        </Grid>
        
      </Grid>
    );
  };

  getAchievements = (achievements, mainColor, accColor) => {
    return (
      <>
        <Typography style={{color: mainColor, paddingBottom: "4px"}} variant="button">
          Achievements
        </Typography>
        {achievements.map(achievement => (
          <div 
            key={achievement}
            style={{
              marginTop: "8px",
              marginRight: "6px",
              padding: "4px",
              backgroundColor: accColor,
              borderRadius: 30,
              display: "inline-block"
            }}
          >
            <Typography
              variant="button"
              className="AchievementText"
              style={{
                paddingLeft: "12px",
                paddingRight: "12px",
                paddingTop: "3px",
                paddingBottom: "3px",
                fontSize: "12px", 
                color: "#fff",
                textAlign: "center",
              }}
            >
              {achievement.split(",")[0]}
              {achievement.split(",").length > 1 &&  
              <IconButton 
                href={achievement.split(",")[1]}
                target="_blank"
                ref="noopener noreferrer"
                style={{margin: "-12px -14px -10px -5px"}}
              >
                <OpenInNew style={{ fontSize: "16px", color: "#fff"}}/>
              </IconButton>
            }
            </Typography>

          </div>
        ))}
        <br/><br/>
      </>
    );
  };

  render() {
    const { 
      projectIcon, projectBanners, heading, subheading, tools, team, 
      built, platforms, date, achievements, bgColor, accColor,
      gitlink, viewlink, privacylink, viewtext, viewicon, body, role, 
      mainColor, currentScheme, status
    } = this.props;

    const lightGray = currentScheme.lightGray;
    const categoryStyle = { fontSize: "14px", color: lightGray, letterSpacing: "0px" };

    return (
      <Card className="ProjectCard">
        {this.getBanner(bgColor, projectBanners, viewtext, viewicon, gitlink, viewlink)}
        <div className="ProjectCardContent">
          <CardContent>
            {this.getHeadings(projectIcon, viewlink, accColor, heading, lightGray, subheading)}
            {this.getDetailsContainer(categoryStyle, platforms, date, built, tools, role, team)}
            <br/>
            
            {achievements.length > 0 && this.getAchievements(achievements, mainColor, accColor)}
            
            {/* About */}
            <Typography style={{color: mainColor, paddingBottom: "4px"}} variant="button">
              ABOUT
            </Typography>

            {/* Body */}
            <Typography style={{fontSize: "14px"}} variant="body1">
              {body}
            </Typography>

            <br/>
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
            {this.getStatus(status, mainColor)}
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;