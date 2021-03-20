import { createMuiTheme, Theme } from "@material-ui/core";
import { colorsDark, ColorSet, colorsLight } from "./colors";

export type ThemeScheme = {
	bg: string;
	bgSecondary: string;
	bgTertiary: string;
	bgCard: string;
	bgInv: string;
	lightGray: string;
	secondary: string;
	muiTheme: Theme;
	muiSidebarTheme: Theme;
	colorSet: ColorSet;
};

const muiGlobalConfig = {
	typography: {
		useNextVariants: true,
		fontFamily: [
			"Inter",
			"-apple-system",
			"BlinkMacSystemFont",
			// eslint-disable-next-line prettier/prettier
			"\"Segoe UI\"",
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
	bgSecondary: "#e9e9e9",
	bgTertiary: "#CECECE",
	bgCard: "#e9e9e9",
	bgInv: "#000000",
	lightGray: "#324A5F",
	secondary: "#198c9c",
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
	bg: "#141c29",
	bgSecondary: "#162032",
	bgTertiary: "#23304a",
	bgCard: "#162032",
	bgInv: "#ffffff",
	lightGray: "#A1B9CE",
	secondary: "#00FECB",
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
