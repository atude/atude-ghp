import { ThemeScheme } from "./muiConfig";

export type ThemedProps = {
	color?: string;
	isDark?: boolean;
	theme?: ThemeScheme;
	id?: string;
};

export type ThemedActiveProps = ThemedProps & {
	// Have to use number or React will complain
	// -> Also look at styled-components transient props
	active: number;
};

export type ThemedWithColorProps = Omit<ThemedProps, "color"> & {
	styledcolor?: string;
};
