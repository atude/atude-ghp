import React, { useContext } from "react";
import { AccountBox, Buffer } from "mdi-material-ui";
import { ThemeContext } from "../context/ThemeContext";

type Route = {
	title: string;
	color: string;
	prevColor: string;
	icAppbar?: JSX.Element;
	icList?: JSX.Element;
};

export const getRoutes = (): Record<string, Route> => {
	const themeContext = useContext(ThemeContext);
	return {
		home: {
			title: "",
			color: themeContext.theme.lightGray,
			prevColor: themeContext.theme.lightGray,
		},
		"about-me": {
			title: "About Me",
			color: themeContext.theme.lightGray,
			prevColor: themeContext.theme.lightGray,
			icAppbar: (
				<AccountBox
					style={{
						fontSize: "80px",
						color: themeContext.theme.bg,
						float: "right",
						padding: "15px",
					}}
				/>
			),
			icList: <AccountBox style={{ color: themeContext.theme.lightGray }} />,
		},
		projects: {
			title: "Featured Projects",
			color: themeContext.theme.lightGray,
			prevColor: themeContext.theme.lightGray,
			icAppbar: (
				<Buffer
					style={{
						fontSize: "80px",
						color: themeContext.theme.bg,
						float: "right",
						padding: "15px",
					}}
				/>
			),
			icList: <Buffer style={{ color: themeContext.theme.lightGray }} />,
		},
	};
};
