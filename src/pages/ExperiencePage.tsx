import React, { useContext, useState } from "react";
import ContentCard from "../components/ContentCard";
import Database from "../data/database";

import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import routes from "../routes/Routes";
import StandardCard from "../components/_shared/StandardCard";

const ExperiencePage = (): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;

	return (
		<StandardCard isDark={isDark}>
			hello
		</StandardCard>
	);
};

export default ExperiencePage;
