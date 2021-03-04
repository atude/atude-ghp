import React, { useContext } from "react";
import Database from "../data/database";

import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "../components/_shared/StandardCard";
import { ThemedWithColorProps } from "../config/styled";
import { Typography } from "@material-ui/core";
import { DatabaseExperience } from "../data/types";
import ToolsList from "../components/_shared/ToolsList";
import { smBreakpoint } from "../utils/layouts";
import icons from "../components/icons";
import { useMediaQuery } from "react-responsive";

const experiences = Database.Experience;

const ExperiencesContainer = styled(StandardCard)`
	padding: 4em 2em 2em;
	margin-bottom: 7em;
	display: flex;
	flex-direction: column;
	@media (max-width: ${`${smBreakpoint}px`}) {
		padding: 2em 1em 2em;
	}
`;

const ExperienceContainer = styled.div`
	display: flex;
	flex-direction: row;

	:hover {
		.ExperienceDot {
			border: 5px solid ${(props) => props.color};
			transform: scale(1.2, 1.2);
		}
		.ExperienceLine {
			background-color: ${(props) => props.color};
		}
		.ExperienceLogo {
			svg {
				color: ${(props) => props.color};
				stroke: ${(props) => props.color};
				transform: scale(1, 1);
			}
		}
		.CompanyText {
			color: ${(props) => props.color};
		}
	}
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
		border-color: ${(props) => props.color};
	}
	@media (max-width: ${`${smBreakpoint}px`}) {
		display: none;
	}
`;

const ExperienceDot = styled.div`
	transition: all 0.15s ease;
	width: 20px;
	height: 20px;
	margin: 0 2em;
	border-radius: 100px;
	background-color: transparent !important;
	border: 3px solid;
	z-index: 1;
`;

const ExperienceLine = styled.div`
	transition: all 0.15s ease;
	width: 2px;
	height: 100%;
	flex-shrink: 1000;
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

const ExperienceCompanyIconWrapper = styled.div<ThemedWithColorProps>`
	margin-right: 12px;
	margin-bottom: -5px;
	margin-top: -8px;
	align-items: center;
	svg {
		font-size: 40px;
		transition: all 0.15s ease;
		color: ${(props) => props.styledcolor};
		stroke: ${(props) => props.styledcolor};
		/* Dont enable stroke unless set by svg */
		stroke-width: 0;
		transform: scale(0.9, 0.9);
	}
`;

const ExperienceHeaderTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -8px;
`;

const ExperienceCompanyText = styled(Typography)<ThemedWithColorProps>`
	transition: all 0.15s ease;
	color: ${(props) => props.styledcolor};
	font-weight: 500;
	line-height: 1.3;
`;

const ExperienceRoleText = styled(Typography)<ThemedWithColorProps>`
	color: ${(props) => props.styledcolor};
	line-height: 1.3;
	font-size: 0.875em;
	font-weight: 500;
`;

const ExperienceDescription = styled(Typography)`
	transition: all 0.25s ease;
	margin-bottom: 1em;
`;

const ExperiencePage = (): JSX.Element => {
	const isSmWidth = useMediaQuery({ query: `(max-width:${smBreakpoint}px)` });
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;

	return (
		<ExperiencesContainer isDark={isDark}>
			{experiences.map((experience: DatabaseExperience, i: number) => (
				<ExperienceContainer
					key={experience.company}
					color={isDark ? experience.colorDark : experience.color}
				>
					{!isSmWidth && (
						<ExperienceDate variant="button" styledcolor={theme.lightGray}>
							{experience.year}
						</ExperienceDate>
					)}
					<ExperienceLineContainer color={theme.bgTertiary}>
						<ExperienceDot className="ExperienceDot" color={theme.lightGray} />
						{i !== experiences.length - 1 && (
							<ExperienceLine className="ExperienceLine" />
						)}
					</ExperienceLineContainer>
					<ExperienceTextContainer>
						<ExperienceCompanyHeader>
							<ExperienceCompanyIconWrapper
								styledcolor={theme.secondary}
								className="ExperienceLogo"
							>
								{icons[experience.company]}
							</ExperienceCompanyIconWrapper>
							<ExperienceHeaderTextContainer>
								<ExperienceCompanyText
									variant="body1"
									styledcolor={theme.secondary}
									className="CompanyText"
								>
									{experience.company}
								</ExperienceCompanyText>
								<ExperienceRoleText
									variant="body1"
									styledcolor={theme.lightGray}
								>
									{experience.role}
								</ExperienceRoleText>
							</ExperienceHeaderTextContainer>
							{isSmWidth && (
								<ExperienceDate variant="button" styledcolor={theme.lightGray}>
									{experience.year}
								</ExperienceDate>
							)}
						</ExperienceCompanyHeader>
						<ExperienceDescription variant="body2" color="textSecondary">
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
