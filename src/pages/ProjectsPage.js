import React, { useState, useEffect } from "react";
import "../components/Components.css";
import Database from "../assets/Database";
import { Grid, Typography, Slide, Switch, FormControlLabel } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import { getMiniIcons } from '../components/ProjectMiniIcons';
import ReactSVG from "react-svg";

import {
  GooglePlay,
  Youtube,
  GoogleChrome,
} from "mdi-material-ui";

export default function ProjectsPage(props) {
  const [banners, setBanners] = useState({});
  const [isLiveProjectsOnly, setLiveProjectsOnly] = useState(false);
  const projects = Database["Projects"];
  const { mainColor, currentScheme, isDark } = props;

  const tBase = 700;
  const tAdd = 300;
  const viewIcons = {
    "Google Play": <GooglePlay />,
    "Youtube": <Youtube />,
    "Chrome Web Store": <GoogleChrome />
  };

  useEffect(() => {
    if (Object.keys(banners).length) return;
    let fetchBanners = {};

    Object.values(projects).forEach(project => {
      fetchBanners[project.heading] = [];
      let j = 0;

      while (true) {
        try {
          const banner = require(`../assets/projects/${project.heading}/${j}.png`);
          fetchBanners[project.heading].push(banner);
        } catch {
          break;
        }

        j++;
      };
    });

    setBanners(fetchBanners);
  }, [banners, projects]);
 
  const getCardMain = (project, i, mainColor, currentScheme) => {   
    return (
      <Grid item container key={project.heading} lg={6} md={6} sm={12} xs={12} alignItems="center" justify="center">
        <Slide
          direction="up"
          in
          mountOnEnter
          unmountOnExit
          timeout={tBase + i * tAdd}
        >
          <ProjectCard
            mainColor={mainColor}
            isDark={isDark}
            currentScheme={currentScheme}
            projectIcon={
              <Typography component="span" style={{ color: project.accColor }}>
                <ReactSVG
                  className="IconColor"
                  svgClassName="ProjectCardIcon"
                  src={require(`../assets/projects/${project.heading}/ic.svg`)}
                />
              </Typography>
            }
            {...project}
            projectBanners={banners[project.heading] ? banners[project.heading] : []}
            tools={getMiniIcons(project.tools, currentScheme.lightGray)}
            built={getMiniIcons(project.built, currentScheme.lightGray)}
            platforms={getMiniIcons(project.platforms, currentScheme.lightGray)}
            viewicon={viewIcons[project.viewicon]}
          />
        </Slide>
      </Grid>
    );
  };

  return (
    <div className="ParentCenterContainer">
      <div 
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <FormControlLabel 
          style={{marginTop: "-8px"}}
          control={
            <Switch 
              color="primary"
              style={{ color: isLiveProjectsOnly ? mainColor : null }}
              checked={isLiveProjectsOnly}
              onChange={() => setLiveProjectsOnly(!isLiveProjectsOnly)}
            />
          } 
          label="Show live projects only" 
        />
      </div>
      <Grid
        container
        direction="row"
        spacing={24}
        alignItems="stretch"
        justify="center"
      >
        {Object.values(projects).filter(project => isLiveProjectsOnly ? project.live : true).map((project, i) =>
          getCardMain(project, i, mainColor, currentScheme)
        )}
      </Grid>
    </div>
  );
};