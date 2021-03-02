import React, { useContext, useState } from "react";
import Database from "../data/database";

import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "../components/_shared/StandardCard";
import { ThemedWithColorProps } from "../config/styled";
import { Typography } from "@material-ui/core";

const experiences = Database.Experience;

const ExperiencesContainer = styled(StandardCard)`
	padding: 2em;
	display: flex;
	flex-direction: column;
`;

const ExperienceContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const ExperienceDate = styled(Typography)<ThemedWithColorProps>`
	flex: 1;
	text-align: right;
	line-height: 1.5;
	color: ${(props) => props.styledcolor};
`;

const ExperienceLineContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	opacity: 1;
	div {
		background-color: ${(props) => props.color};
	}
`;

const ExperienceDot = styled.div`
	width: 20px;
	height: 20px;
	margin: 0 20px;
	border-radius: 100px;
`;

const ExperienceLine = styled.div`
	width: 6px;
	height: 100%;
	margin-top: -14px;
	margin-bottom: -14px;
`;

const ExperienceTextContainer = styled.div`
	flex: 6;
`;

const ExperienceCompanyText = styled.span``;

const ExperienceDescription = styled.p``;

const ExperiencePage = (): JSX.Element => {
	const [currExperience, setCurrExperience] = useState(experiences[0].company);
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;

	return (
		<ExperiencesContainer isDark={isDark}>
			{experiences.map((experience) => (
				<ExperienceContainer key={experience.company}>
					<ExperienceDate variant="button" styledcolor={theme.lightGray}>
						{experience.yearEnd}
					</ExperienceDate>
					<ExperienceLineContainer color={theme.bgTertiary}>
						<ExperienceDot />
						<ExperienceLine />
					</ExperienceLineContainer>
					<ExperienceTextContainer>
						<ExperienceCompanyText>{experience.company}</ExperienceCompanyText>
						<ExperienceDescription>
							{experience.description}
						</ExperienceDescription>
					</ExperienceTextContainer>
				</ExperienceContainer>
			))}
		</ExperiencesContainer>
	);
};

export default ExperiencePage;
