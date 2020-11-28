import React from "react";
import "./App.css";
import { AccountBox, Buffer } from "mdi-material-ui";

const getRouteStyle = (currentScheme) => {
	return {
		fontSize: "80px",
		color: currentScheme.bg,
	};
};

export const getRoutes = (currentScheme) => {
	return {
		home: {
			title: "",
			color: currentScheme.colorSet.purple,
			prevColor: currentScheme.colorSet.grey,
		},
		"about-me": {
			title: "About Me",
			color: currentScheme.colorSet.blue,
			prevColor: currentScheme.colorSet.purple,
			icAppbar: (
				<AccountBox
					style={getRouteStyle(currentScheme)}
					className="AppbarIcon"
				/>
			),
			icList: <AccountBox className="ListIcon" />,
		},
		projects: {
			title: "Projects",
			color: currentScheme.colorSet.red,
			prevColor: currentScheme.colorSet.blue,
			icAppbar: (
				<Buffer style={getRouteStyle(currentScheme)} className="AppbarIcon" />
			),
			icList: <Buffer className="ListIcon" />,
		},
	};
};
