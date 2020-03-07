import React, { useState, useEffect } from "react";
import "../components/Components.css";
import Database from "../assets/Database";
import { Grid, Typography, Slide } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import { getMiniIcons } from '../components/ProjectMiniIcons';
import ReactSVG from "react-svg";

import {
  GooglePlay,
  Youtube,
  GoogleChrome,
} from "mdi-material-ui";

export default function ProjectsPage(props) {
  const [transitionDone, setTransitionDone] = useState(false);
  const [banners, setBanners] = useState({});
  const projects = Database["Projects"];
  const { mainColor, currentScheme } = props;

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
 
  const getCardMain = (project, i, mainColor, currentScheme, projectsLength) => {   
    return (
      <Grid item key={project.heading} lg={6} md={6} sm={12} xs={12} alignItems="center" justify="center">
        <Slide
          direction="up"
          in
          mountOnEnter
          timeout={tBase + i * tAdd}
          onEntered={
            i === projectsLength ? () => setTransitionDone(true) : void 0
          }
        >
          <ProjectCard
            mainColor={mainColor}
            style={{ padding: "2px" }}
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
      <Grid
        container
        direction="row"
        spacing={24}
        alignItems="stretch"
        justify="center"
        style={{ overflowY: transitionDone ? "inherit" : "hidden" }}
      >
        {Object.values(projects).map((project, i) =>
          getCardMain(project, i, mainColor, currentScheme, Object.values(projects).length)
        )}
      </Grid>
    </div>
  );
};