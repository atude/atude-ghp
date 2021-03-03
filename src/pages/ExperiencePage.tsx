import React, { useContext, useState } from "react";
import Database from "../data/database";

import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "../components/_shared/StandardCard";
import { ThemedActiveProps, ThemedWithColorProps } from "../config/styled";
import { Typography } from "@material-ui/core";
import { DatabaseExperience } from "../data/types";
import ToolsList from "../components/_shared/ToolsList";
import { smBreakpoint } from "../utils/layouts";
import icons from "../components/icons";
import { useMediaQuery } from "react-responsive";

const experiences = Database.Experience;

const ExperiencesContainer = styled(StandardCard)`
	padding: 2em;
	margin-bottom: 7em;
	display: flex;
	flex-direction: column;
	@media (max-width: ${`${smBreakpoint}px`}) {
		padding: 1.5em 1em;
	}
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
	@media (max-width: ${`${smBreakpoint}px`}) {
		font-size: 1em;
		line-height: 1.3;
	}
`;

const ExperienceLineContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	opacity: 1;
	div {
		background-color: ${(props) => props.color};
	}
	@media (max-width: ${`${smBreakpoint}px`}) {
		display: none;
	}
`;

const ExperienceDot = styled.div`
	width: 20px;
	height: 20px;
	margin: 0 2em;
	border-radius: 100px;
`;

const ExperienceLine = styled.div`
	width: 6px;
	height: 100%;
	margin-top: -14px;
	margin-bottom: -14px;
`;

const ExperienceTextContainer = styled.div`
	flex: 8;
	margin-bottom: 2.5em;
`;

const ExperienceCompanyHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1em;
`;

const ExperienceCompanyIconWrapper = styled.div`
	margin-right: 12px;
	margin-bottom: -5px;
	margin-top: -8px;
	align-items: center;
	svg {
		font-size: 40px;
		color: ${(props) => props.color};
		stroke: ${(props) => props.color};
		/* Dont enable stroke unless set by svg */
		stroke-width: 0;
	}
`;

const ExperienceCompanyText = styled(Typography)<ThemedWithColorProps>`
	color: ${(props) => props.styledcolor};
	font-weight: 500;
	line-height: 1.3;
`;

const ExperienceDescription = styled(Typography)<ThemedActiveProps>`
	transition: all 0.25s ease;
	margin-bottom: 1em;
	/* flex: ${(props) => (props.active ? 1 : 0)};
	opacity: ${(props) => (props.active ? 1 : 0)}; */
`;

const ExperiencePage = (): JSX.Element => {
	const [activeCompany, setActiveCompany] = useState(experiences[0].company);
	const isSmWidth = useMediaQuery({ query: `(max-width:${smBreakpoint}px)` });
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;

	return (
		<ExperiencesContainer isDark={isDark}>
			{experiences.map((experience: DatabaseExperience, i: number) => (
				<ExperienceContainer
					key={experience.company}
					onMouseEnter={() => setActiveCompany(experience.company)}
				>
					{!isSmWidth && (
						<ExperienceDate variant="button" styledcolor={theme.lightGray}>
							{experience.year}
						</ExperienceDate>
					)}
					<ExperienceLineContainer color={theme.bgTertiary}>
						<ExperienceDot />
						{i !== experiences.length - 1 && <ExperienceLine />}
					</ExperienceLineContainer>
					<ExperienceTextContainer>
						<ExperienceCompanyHeader>
							<ExperienceCompanyIconWrapper color={theme.secondary}>
								{icons[experience.company]}
							</ExperienceCompanyIconWrapper>
							<ExperienceCompanyText
								variant="body1"
								styledcolor={theme.secondary}
							>
								{experience.company}
							</ExperienceCompanyText>
							{isSmWidth && (
								<ExperienceDate variant="button" styledcolor={theme.lightGray}>
									{experience.year}
								</ExperienceDate>
							)}
						</ExperienceCompanyHeader>
						<ExperienceDescription
							variant="body2"
							color="textSecondary"
							active={experience.company === activeCompany ? 1 : 0}
						>
							{experience.description}
						</ExperienceDescription>
						<ToolsList
							tools={experience.tools}
							color={theme.lightGray}
							isDark={isDark}
						/>
					</ExperienceTextContainer>
				</ExperienceContainer>
			))}
		</ExperiencesContainer>
	);
};

export default ExperiencePage;
