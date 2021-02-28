import { ThemeScheme } from "./muiConfig";

export type ThemedProps = {
	color?: string;
	isDark?: boolean;
	currentScheme?: ThemeScheme;
};

export type ThemedTypographyProps = Omit<ThemedProps, "color"> & {
	textColor?: string;
};
