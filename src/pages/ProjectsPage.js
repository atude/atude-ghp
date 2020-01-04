import React from "react";
import "../components/Components.css";
import Database from "../assets/Database";
import { Grid, Tooltip, Typography, Slide, SvgIcon } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import ReactSVG from "react-svg";

import {
  Android,
  GoogleChrome,
  GooglePlay,
  Youtube,
  LanguageCsharp,
  LanguageC,
  LanguageJavascript,
  React as ReactIcon,
  LanguageHtml5,
  LanguageCss3,
  Unity,
  Edge,
  Firefox,
  MaterialUi,
  Firebase
} from "mdi-material-ui";

const tBase = 700;
const tAdd = 300;

const viewIcons = {
  "Google Play": <GooglePlay />,
  Youtube: <Youtube />
};

class ProjectsPage extends React.Component {
  state = {
    transitionDone: false
  };

  setTransition = () => {
    this.setState({ transitionDone: true });
  };

  getMiniIcons = types => {
    var iconList = [];
    const miniIconColor = { color: this.props.currentScheme.lightGray };

    types.forEach(item => {
      switch (item) {
        case "Android":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <Android fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Chrome":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <GoogleChrome fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Edge":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <Edge fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Firefox":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <Firefox fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "C":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <LanguageC fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "C#":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <LanguageCsharp fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "JavaScript":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <LanguageJavascript fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "React":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <ReactIcon fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "React Native":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <ReactIcon fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "React Native Paper":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <SvgIcon
                fontSize="small"
                viewBox="0 0 850 850"
                style={miniIconColor}
              >
                <g transform="translate(0.000000,800.000000) scale(0.10000,-0.100000)">
                  <path
                    stroke={miniIconColor.color}
                    strokeWidth="300"
                    d="M5380 7073 c-69 -12 -152 -38 -218 -68 -40 -19 -714 -404 -1498 -857 -1035 -597 -1430 -830 -1439 -848 -7 -14 -148 -524 -314 -1133 -281 -1029 -302 -1110 -291 -1143 14 -41 60 -74 105 -74 22 0 251 127 825 459 437 252 796 458 797 457 0 0 -122 -449 -273 -996 -200 -726 -273 -1003 -268 -1025 4 -23 142 -167 567 -593 614 -614 599 -602 673 -566 21 11 42 26 47 34 5 9 131 471 281 1029 l271 1013 398 237 c219 130 424 258 457 284 111 89 212 230 282 397 41 95 630 2248 649 2371 7 43 9 118 6 179 -22 409 -317 751 -719 834 -72 15 -273 20 -338 9z m330 -234 c308 -82 524 -374 508 -689 -5 -85 -30 -184 -227 -910 -122 -448 -224 -823 -227 -833 -4 -14 -17 0 -49 55 -111 190 -300 334 -531 404 -81 25 -103 28 -249 28 -145 0 -168 -3 -248 -27 -48 -15 -118 -43 -155 -61 -37 -19 -643 -368 -1347 -774 -704 -407 -1281 -739 -1282 -738 -1 0 114 423 254 938 l256 938 1414 816 c936 540 1439 825 1486 841 129 45 255 49 397 12z m-627 -2175 c204 -46 376 -179 463 -359 54 -112 68 -182 68 -330 0 -121 -2 -136 -31 -211 -53 -141 -135 -250 -248 -328 -125 -88 -2229 -1327 -2233 -1316 -3 8 515 1901 522 1907 10 10 1016 587 1045 599 123 53 283 67 414 38z m-925 -2868 l-213 -796 -422 422 c-239 239 -419 426 -414 431 12 12 1255 745 1259 742 1 -1 -93 -361 -210 -799z"
                  />
                </g>
              </SvgIcon>
            </Tooltip>
          );
          break;
        case "Material UI":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <MaterialUi fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Expo":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <SvgIcon
                fontSize="small"
                viewBox="0 0 256 256"
                style={miniIconColor}
              >
                <path d="M46 178.5c.3 3.62 1.56 7.24 4.89 12.1 3.94 5.77 10.72 8.94 15.66 3.85 3.34-3.43 39.42-66.5 56.81-90.4a5.18 5.18 0 0 1 8.5 0c17.39 23.9 53.47 86.97 56.8 90.4 4.94 5.09 11.73 1.92 15.67-3.85 3.88-5.68 4.95-9.66 4.95-13.92 0-2.9-56.19-107.49-61.85-116.19-5.45-8.37-7.1-10.2-16.31-10.49h-7.02c-9.21.3-10.87 2.12-16.31 10.49-5.55 8.52-59.55 108.98-61.79 115.87v2.14z" />
              </SvgIcon>
            </Tooltip>
          );
          break;
        case "HTML":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <LanguageHtml5 fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "CSS":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <LanguageCss3 fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Unity":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <Unity fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Firebase":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <Firebase fontSize="small" style={miniIconColor} />
            </Tooltip>
          );
          break;
        case "Express":
          iconList.push(
            <Tooltip disableFocusListener title={item}>
              <SvgIcon fontSize="small" viewBox="0 0 128 128" style={miniIconColor}>
                <g transform="translate(6.4, 6.4) scale(0.9, 0.9)"><path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z" /><path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z" /></g>
              </SvgIcon>
            </Tooltip>
          );
          break;
        default:
          break;
      }
    });

    return iconList;
  };

  getViewIcon = type => {
    return viewIcons[type];
  };

  getCardMain = (item, i, mainColor, currentScheme, projects) => {
    const banners = [];
    let j = 0;
    
    while (true) {
      try {
        const banner = require(`../assets/projects/${item.heading}/${j}.png`);
        banners.push(banner);
      } catch {
        break;
      }

      j++;
    };

    return (
      <Grid key={item.heading} item lg={6} md={6} sm={12} xs={12}>
        <Slide
          direction="up"
          in
          mountOnEnter
          timeout={tBase + i * tAdd}
          onEntered={
            i === Object.values(projects).length ? this.setTransition : void 0
          }
        >
          <ProjectCard
            mainColor={mainColor}
            style={{ padding: "2px" }}
            currentScheme={currentScheme}
            projectIcon={
              <Typography component="span" style={{ color: item.accColor }}>
                <ReactSVG
                  className="IconColor"
                  svgClassName="ProjectCardIcon"
                  src={require(`../assets/projects/${item.heading}/ic.svg`)}
                />
              </Typography>
            }
            {...item}
            projectBanner={banners}
            tools={this.getMiniIcons(item.tools)}
            built={this.getMiniIcons(item.built)}
            platforms={this.getMiniIcons(item.platforms)}
            viewicon={this.getViewIcon(item.viewicon)}
          />
        </Slide>
      </Grid>
    );
  };

  render() {
    const projects = Database["Projects"];
    const { mainColor, currentScheme } = this.props;
    const { transitionDone } = this.state;

    return (
      <div>
        <Grid
          container
          direction="row"
          spacing={24}
          alignItems="stretch"
          justify="center"
          style={{ overflowY: transitionDone ? "inherit" : "hidden" }}
        >
          {Object.values(projects).map((item, i) =>
            this.getCardMain(item, i, mainColor, currentScheme, projects)
          )}
        </Grid>
      </div>
    );
  }
}

export default ProjectsPage;
