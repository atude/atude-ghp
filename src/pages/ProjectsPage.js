import React, { useState, useEffect } from "react";
import "../components/Components.css";
import Database from "../assets/Database";
import { Grid, Typography } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import { getMiniIcons } from "../components/ProjectMiniIcons";
import ReactSVG from "react-svg";
import { GooglePlay, Youtube, GoogleChrome } from "mdi-material-ui";
import AnchoredSubheading from "../components/AnchoredSubheading";
import { getRoutes } from "../Routes";

const viewIcons = {
	"Google Play": <GooglePlay />,
	Youtube: <Youtube />,
	"Chrome Web Store": <GoogleChrome />,
};

export default function ProjectsPage(props) {
	const [banners, setBanners] = useState({});
	const projects = Database["Projects"];
	const { mainColor, prevColor, currentScheme, isDark, sectionId } = props;

	useEffect(() => {
		if (Object.keys(banners).length) {
			return;
		}
		let fetchBanners = {};

		Object.values(projects).forEach((project) => {
			fetchBanners[project.heading] = [];
			let j = 0;
			// eslint-disable-next-line no-constant-condition
			while (true) {
				try {
					const banner = require(`../assets/projects/${project.heading}/${j}.png`)
						.default;
					fetchBanners[project.heading].push(banner);
				} catch {
					break;
				}
				j++;
			}
		});
		setBanners(fetchBanners);
	}, [banners, projects]);

	const getCardMain = (project, i, mainColor, currentScheme) => {
		return (
			<Grid
				item
				container
				key={project.heading}
				md={12}
				xs={12}
				alignItems="center"
				justify="center"
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
								src={
									require(`../assets/projects/${project.heading}/ic.svg`)
										.default
								}
							/>
						</Typography>
					}
					{...project}
					projectBanners={
						banners[project.heading] ? banners[project.heading] : []
					}
					tools={getMiniIcons(project.tools, currentScheme.lightGray)}
					platforms={getMiniIcons(project.platforms, currentScheme.lightGray)}
					viewicon={viewIcons[project.viewicon]}
				/>
			</Grid>
		);
	};

	return (
		<div>
			<AnchoredSubheading
				id={sectionId}
				color={mainColor}
				prevColor={prevColor}
				title={getRoutes(currentScheme)[sectionId].title}
				subtitle={getRoutes(currentScheme)[sectionId].subtitle ?? ""}
				icon={getRoutes(currentScheme)[sectionId].icAppbar}
				currentScheme={currentScheme}
				isDark={isDark}
			/>
			<Grid
				container
				direction="row"
				spacing={24}
				alignItems="stretch"
				justify="center"
			>
				{Object.values(projects).map((project, i) =>
					getCardMain(project, i, mainColor, currentScheme)
				)}
			</Grid>
		</div>
	);
}
