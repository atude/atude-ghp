import { ThemeScheme } from "./muiConfig";

export type ThemedProps = {
	color?: string;
	isDark?: boolean;
	currentScheme?: ThemeScheme;
	id?: string;
};

export type ThemedActiveProps = ThemedProps & {
	active: boolean;
};

export type ThemedTypographyProps = Omit<ThemedProps, "color"> & {
	textColor?: string;
};

export type ThemedGenericColorProps = {
	styledColor: string;
};
