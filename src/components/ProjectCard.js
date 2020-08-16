import React, { useState } from 'react';
import './Components.css';
import { 
  Typography, 
  CardContent, 
  Grid, 
  Chip, 
  Avatar, 
  Link, 
  Button, 
  Tooltip, 
  Divider, 
  IconButton, 
} from '@material-ui/core';
import {
  Github, 
  ShieldLock, 
  ChevronLeftCircle, 
  ChevronRightCircle, 
  OpenInNew,
  CheckBold, 
  CheckNetworkOutline,
} from 'mdi-material-ui';
import { useMediaQuery } from 'react-responsive'

import { projectDetailsStaticIcon } from '../utils/icons';
import { smBreakpoint } from '../utils/layouts';

const ProjectCard = (props) => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const isSmWidth = useMediaQuery({ query: `(max-width:${smBreakpoint}px)` });
  
  const bannerControl = (i, len) => {
    if (len - 1 === bannerIndex && i >= 0) {
      i = -(len - 1);
    }
    if (0 === bannerIndex && i <= 0) {
      i = len - 1;
    }
    setBannerIndex(bannerIndex + i);
  }

  const getBanner = (bgColor, projectBanners, viewtext, viewicon, gitlink, viewlink) => {
    return (
      <div style={{backgroundColor: bgColor}} className="BannerContainer">
        {projectBanners.map((banner, i) => (
          <img
            key={`${banner}_${i}_banner`}
            alt={`${banner}_${i}_banner`}
            style={{ opacity: bannerIndex === i ? 1 : 0 }}
            className="BannerImg"
            src={banner}
            loading="lazy"
          />
        ))}
                  
        <Button className="BannerLeft" onClick={() => bannerControl(-1, projectBanners.length)}>
          <ChevronLeftCircle style={{ color: "white", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))" }} />
        </Button>
        <Button className="BannerRight" onClick={() => bannerControl(1, projectBanners.length)}>
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
              avatar={<Avatar><Github /></Avatar>}
              component="a"
              clickable
              href={gitlink}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        {/* Banner carousel dots */}
        <Grid className="BannerDots" container spacing={8} direction="row" alignItems="center" justify="center">
          {projectBanners.map((banner, i) => (
            <Grid item key={`${banner}_${i}_dot`}
              style={{
                opacity: bannerIndex === i ? 1 : 0.5,
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

  const getStatus = (status, mainColor) => {
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

  const getHeadings = (projectIcon, viewlink, accColor, heading, lightGray, subheading) => {
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

  const getDetailsSectionLeft = (categoryText, categoryStyle, rightPadding, items) => (
    <Grid item container>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item>
          <Typography 
            style={{
              ...categoryStyle, 
              paddingRight: rightPadding,
              paddingTop: "3px",
            }} 
            variant="button"
          >
            {categoryText}
          </Typography>
        </Grid>
        <Grid item container direction="row" xs={6}>
          {items}
        </Grid> 
      </Grid>
    </Grid>
  );

  const getDetailsSectionRight = (text, categoryStyle, rightPadding, icon) => (
    <Grid item>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography style={{...categoryStyle, paddingRight: rightPadding}}
            variant="button" className="ProjectRightText">
            {text}
          </Typography>
        </Grid>
        <Grid item>
          {icon}
        </Grid>
      </Grid> 
    </Grid>
  );

  const getDetailsContainer = (categoryStyle, platforms, date, built, tools, role, team) => (
    <Grid container
      direction="row"
    >
      <Grid item xs={12} sm={7} container direction="column">
        {getDetailsSectionLeft("PLATFORMS", categoryStyle, 10,
          Object.keys(platforms).map(item => (
            <Grid key={item} item className="DetailsIconLeft">{platforms[item]}</Grid>
          ))
        )}
        {getDetailsSectionLeft("LANGUAGES", categoryStyle, 10,
          Object.keys(built).map(item => (
            <Grid key={item} item className="DetailsIconLeft">{built[item]}</Grid>
          ))
        )}
        {getDetailsSectionLeft("TECH STACK", categoryStyle, 8,
          Object.keys(tools).map(item => (
            <Grid key={item} item className="DetailsIconLeft">{tools[item]}</Grid>
          ))
        )}
      </Grid>
      {!!isSmWidth && <Divider style={{ width: "100%", marginTop: "15px", marginBottom: "15px" }} />}
      <Grid 
        item 
        xs={12} 
        sm={5} 
        container 
        direction="column" 
        justify="flex-start"
        alignItems={isSmWidth ? "flex-start" : "flex-end"}
      >
        {getDetailsSectionRight(date, categoryStyle, 1, projectDetailsStaticIcon("Calendar", currentScheme.lightGray))}
        {getDetailsSectionRight(role, categoryStyle, 1, projectDetailsStaticIcon(role, currentScheme.lightGray))}
        {getDetailsSectionRight(team, categoryStyle, 1, projectDetailsStaticIcon(team, currentScheme.lightGray))}
      </Grid>
      
    </Grid>
  );

  const getAchievements = (achievements, mainColor, accColor) =>  (
    <div style={{
      paddingBottom: "20px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      minHeight: isSmWidth ? "63px" : 0,
    }}>
      {achievements.map(achievement => (
        <div 
          key={achievement}
          style={{
            marginTop: "8px",
            marginRight: "6px",
            padding: "4px",
            backgroundColor: accColor,
            borderRadius: 30,
          }}
        >
          <Typography
            variant="button"
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
              rel="noopener noreferrer"
              style={{margin: "-12px -14px -10px -5px"}}
            >
              <OpenInNew style={{ fontSize: "16px", color: "#fff"}}/>
            </IconButton>
          }
          </Typography>
        </div>
      ))}
    </div>
  );

  const { 
    projectIcon, projectBanners, heading, subheading, tools, team, 
    built, platforms, date, achievements, bgColor, accColor,
    gitlink, viewlink, privacylink, viewtext, viewicon, body, role, 
    mainColor, currentScheme, status, isDark
  } = props;

  const lightGray = currentScheme.lightGray;
  const categoryStyle = { fontSize: "14px", color: lightGray, letterSpacing: "0.1px" };

  return (
    <div className={`ProjectCard ${isDark ? "StandardCardDark" : "StandardCard"}`}>
      {getBanner(bgColor, projectBanners, viewtext, viewicon, gitlink, viewlink)}
      <div className="ProjectCardContent">
        <CardContent>
          {getHeadings(projectIcon, viewlink, accColor, heading, lightGray, subheading)}
          {!!achievements.length && getAchievements(achievements, mainColor, accColor)}
          {getDetailsContainer(categoryStyle, platforms, date, built, tools, role, team)}
          <br/>
          
          {/* About */}
          <Typography style={{color: mainColor, paddingBottom: "4px"}} variant="button">
            ABOUT
          </Typography>

          {/* Body */}
          <Typography color="textSecondary" style={{fontSize: "14px"}} variant="body1">
            {body}
          </Typography>

          <br/>
          {privacylink !== "" &&
            <div className="PrivacyText">
              <Link 
                href={privacylink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "none" }}
              >
                <ShieldLock 
                  style={{
                    float: "right", 
                    color: mainColor, 
                    fontSize: "18px", 
                    marginLeft: "3px"
                  }}
                />
                <Typography inline variant="button" style={{ fontSize: "11px", color: mainColor, float: "left" }}>
                  Privacy policy
                </Typography>
              </Link>
            </div>
          }
          {getStatus(status, mainColor)}
        </CardContent>
      </div>
    </div>
  );
}

export default ProjectCard;