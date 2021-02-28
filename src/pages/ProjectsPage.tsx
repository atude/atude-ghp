import React, { useState, useEffect, useContext } from "react";
import "../components/Components.css";
import database from "../data/database";
import { Grid, Typography } from "@material-ui/core";
import ProjectCard from "../components/project/ProjectCard";
import { getMiniIcons } from "../components/project/ProjectMiniIcons";
import ReactSVG from "react-svg";
import { GooglePlay, Youtube, GoogleChrome } from "mdi-material-ui";
import AnchoredSubheading from "../components/AnchoredSubheading";
import { getRoutes } from "../routes/Routes";
import { ThemeContext } from "../context/ThemeContext";
import { DatabaseProject, DatabaseProjectViewIcon } from "../data/types";
import { PageProps } from "../types";

const viewIcons: Record<DatabaseProjectViewIcon, JSX.Element> = {
	"Google Play": <GooglePlay />,
	Youtube: <Youtube />,
	"Chrome Web Store": <GoogleChrome />,
};

const ProjectsPage = (props: PageProps): JSX.Element => {
	const [banners, setBanners] = useState<Record<string, any[]>>({});
	const themeContext = useContext(ThemeContext);
	const { theme } = themeContext;
	const { sectionId } = props;
	const projects = database.Projects;

	useEffect(() => {
		if (Object.keys(banners).length) {
			return;
		}
		const fetchBanners: Record<string, any[]> = {};

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
					projectIcon={
						<Typography component="span" style={{ color: project.accColor }}>
							<ReactSVG
								className="IconColor"
								svgClassName="ProjectCardIcon"
								src={
									// eslint-disable-next-line @typescript-eslint/no-var-requires
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
					tools={getMiniIcons(project.tools, theme.lightGray)}
					platforms={getMiniIcons(project.platforms, theme.lightGray)}
					viewicon={viewIcons[project.viewicon]}
				/>
			</Grid>
		);
	};

	return (
		<div>
			<AnchoredSubheading
				id={sectionId}
				title={getRoutes()[sectionId].title}
				icon={getRoutes()[sectionId].icAppbar}
			/>
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
