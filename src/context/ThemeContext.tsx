import React, { createContext, useEffect, useState } from "react";
import { darkScheme, lightScheme, ThemeScheme } from "../config/muiConfig";

type ThemeContextType = {
	theme: ThemeScheme;
	toggleTheme: () => void;
	isDark: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
	theme: lightScheme,
	toggleTheme: () => void 0,
	isDark: false,
});

export const ThemeProvider = (
	props: React.PropsWithChildren<unknown>
): JSX.Element => {
	const [theme, setTheme] = useState(lightScheme);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const getIsDark = localStorage.getItem("isDark");
		if (!getIsDark) {
			switchTheme(true);
			return;
		}
		switchTheme(getIsDark === "Dark" ? true : false);
	}, []);

	const switchTheme = (isDarkVal: boolean): void => {
		localStorage.setItem("isDark", isDarkVal ? "Dark" : "Light");
		if (isDarkVal) {
			setTheme(darkScheme);
			setIsDark(true);
		} else {
			setTheme(lightScheme);
			setIsDark(false);
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				isDark,
				toggleTheme: () => switchTheme(!isDark),
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};
