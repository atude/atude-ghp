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
			color: currentScheme.lightGray,
			prevColor: currentScheme.lightGray,
		},
		"about-me": {
			title: "About Me",
			color: currentScheme.lightGray,
			prevColor: currentScheme.lightGray,
			icAppbar: (
				<AccountBox
					style={getRouteStyle(currentScheme)}
					className="AppbarIcon"
				/>
			),
			icList: (
				<AccountBox
					className="ListIcon"
					style={{ color: currentScheme.lightGray }}
				/>
			),
		},
		projects: {
			title: "Featured Projects",
			color: currentScheme.lightGray,
			prevColor: currentScheme.lightGray,
			icAppbar: (
				<Buffer style={getRouteStyle(currentScheme)} className="AppbarIcon" />
			),
			icList: (
				<Buffer
					className="ListIcon"
					style={{ color: currentScheme.lightGray }}
				/>
			),
		},
	};
};
