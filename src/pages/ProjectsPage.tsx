import React from "react";
import database from "../data/database";
import { Grid } from "@material-ui/core";
import ProjectCard from "../components/project/ProjectCard";
import { DatabaseProject } from "../data/types";
import icons from "../components/icons";

const ProjectsPage = (): JSX.Element => {
	const projects = database.Projects;

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
				<ProjectCard {...project} viewicon={icons[project.viewicon]} />
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
