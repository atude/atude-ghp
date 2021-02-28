import React, { useContext } from "react";
import { AccountBox, Buffer } from "mdi-material-ui";
import { ThemeContext } from "../context/ThemeContext";

type Route = {
	title: string;
	icAppbar?: JSX.Element;
	icList?: JSX.Element;
};

export const getRoutes = (): Record<string, Route> => {
	const themeContext = useContext(ThemeContext);
	return {
		home: {
			title: "",
		},
		"about-me": {
			title: "About Me",
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
