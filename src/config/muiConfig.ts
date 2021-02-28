import { createMuiTheme } from "@material-ui/core";
import { colorsDark, ColorSet, colorsLight } from "./colors";

export type ThemeScheme = {
	bg: string;
	bgInv: string;
	bgSecond: string;
	lightGray: string;
	secondary: string;
	muiTheme: any;
	muiSidebarTheme: any;
	colorSet: ColorSet;
};

const muiGlobalConfig = {
	typography: {
		useNextVariants: true,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			// eslint-disable-next-line prettier/prettier
			"\"Segoe UI\"",
			"Roboto",
			// eslint-disable-next-line prettier/prettier
			"\"Helvetica Neue\"",
			"Arial",
			"sans-serif",
		].join(","),
	},
	palette: {
		primary: {
			main: "#555555",
			text: "#ffffff",
		},
		secondary: {
			main: "#342E37",
		},
		error: {
			main: "#ffffff",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
};

export const lightScheme: ThemeScheme = {
	bg: "#FFFCF9",
	bgInv: "#000000",
	bgSecond: "#CCC9DC",
	lightGray: "#324A5F",
	secondary: "#1B9AAA",
	muiTheme: createMuiTheme({
		...muiGlobalConfig,
		palette: {
			...muiGlobalConfig.palette,
			type: "light",
		},
	}),
	muiSidebarTheme: createMuiTheme({
		...muiGlobalConfig,
		palette: {
			...muiGlobalConfig.palette,
			type: "light",
		},
	}),
	colorSet: colorsDark,
};

export const darkScheme: ThemeScheme = {
	bg: "#0C1821",
	bgInv: "#ffffff",
	bgSecond: "#0C1821",
	lightGray: "#A1B9CE",
	secondary: "#55b5c2",
	muiTheme: createMuiTheme({
		...muiGlobalConfig,
		palette: {
			...muiGlobalConfig.palette,
			type: "dark",
		},
	}),
	muiSidebarTheme: createMuiTheme({
		...muiGlobalConfig,
		palette: {
			...muiGlobalConfig.palette,
			type: "dark",
		},
	}),
	colorSet: colorsLight,
};
