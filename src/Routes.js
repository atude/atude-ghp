import React from "react";
import "./App.css";
import { AccountBox, Buffer, MessageBulleted } from "mdi-material-ui";

const getRouteStyle = (currentScheme) => {
	return {
		fontSize: "80px",
		color: currentScheme.bg,
	};
};

export const getRoutes = (currentScheme) => {
	return {
		"/": {
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
		// "/blog": {
		//   "title": "Research Blog",
		//   "color": currentScheme.colorSet.orange,
		//   "icAppbar": <NewspaperVariantMultiple style={getRouteStyle(currentScheme, "orange")} className="AppbarIcon"/>,
		//   "icList": <NewspaperVariantMultiple className="ListIcon"/>,
		// },
		contact: {
			title: "Contact",
			color: currentScheme.colorSet.purple,
			prevColor: currentScheme.colorSet.red,
			icAppbar: (
				<MessageBulleted
					style={getRouteStyle(currentScheme, "purple")}
					className="AppbarIcon"
				/>
			),
			icList: <MessageBulleted className="ListIcon" />,
		},
	};
};
