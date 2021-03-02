import React, { useState, useEffect, useContext } from "react";
import database from "../data/database";
import { Grid } from "@material-ui/core";
import ProjectCard from "../components/project/ProjectCard";
import { getMiniIcons } from "../components/project/ProjectMiniIcons";
import { ThemeContext } from "../context/ThemeContext";
import { DatabaseProject } from "../data/types";
import icons from "../components/icons";

const ProjectsPage = (): JSX.Element => {
	const [banners, setBanners] = useState<Record<string, any[]>>({});
	const themeContext = useContext(ThemeContext);
	const { theme } = themeContext;
	const projects = database.Projects;

	useEffect(() => {
		if (Object.keys(banners).length) {
			return;
		}

		const fetchBanners: Record<string, string[]> = {};
		Object.values(projects).forEach((project) => {
			fetchBanners[project.heading] = [];
			let j = 0;
			// eslint-disable-next-line no-constant-condition
			while (true) {
				try {
					// eslint-disable-next-line @typescript-eslint/no-var-requires
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

	const getCardMain = (project: DatabaseProject) => {
		return (
			<Grid
				item
				container
				key={project.heading}
				md={12}
				alignItems="center"
				justify="center"
			>
				<ProjectCard
					{...project}
					projectBanners={
						banners[project.heading] ? banners[project.heading] : []
					}
					tools={getMiniIcons(project.tools, theme.lightGray)}
					viewicon={icons[project.viewicon]}
				/>
			</Grid>
		);
	};

	return (
		<div>
			<Grid
				container
				direction="row"
				spacing={24}
				alignItems="stretch"
				justify="center"
			>
				{Object.values(projects).map((project) => getCardMain(project))}
			</Grid>
		</div>
	);
};

export default ProjectsPage;
