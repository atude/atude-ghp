import React from "react";
import { AccountBox, BriefcaseClock, Buffer } from "mdi-material-ui";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";
import AnchoredSubheading from "../components/AnchoredSubheading";

type Route = {
	title: string;
	page: JSX.Element;
	icon?: JSX.Element;
};

const withHeading = (
	page: JSX.Element,
	routeId: string,
	title: string,
	icon: JSX.Element
) => (
	<>
		<AnchoredSubheading id={routeId} title={title} icon={icon} />
		{page}
	</>
);

const routes: Record<string, Route> = {
	home: {
		title: "",
		page: <HomePage routeId="home" />,
	},
	aboutMe: {
		title: "About Me",
		page: withHeading(<AboutPage />, "aboutMe", "About Me", <AccountBox />),
		icon: <AccountBox />,
	},
	experience: {
		title: "Experience",
		page: withHeading(
			<ExperiencePage />,
			"experience",
			"Experience",
			<BriefcaseClock />
		),
		icon: <BriefcaseClock />,
	},
	projects: {
		title: "Projects",
		page: withHeading(
			<ProjectsPage />,
			"projects",
			"Featured Projects",
			<Buffer />
		),
		icon: <Buffer />,
	},
};

export default routes;
