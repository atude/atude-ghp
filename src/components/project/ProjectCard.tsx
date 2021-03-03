import React, { useContext, useState } from "react";
import {
	Typography,
	CardContent,
	Grid,
	Button,
	IconButton,
	Link,
} from "@material-ui/core";
import { Github, ChevronLeft, ChevronRight } from "mdi-material-ui";
import { useMediaQuery } from "react-responsive";

import { mdBreakpoint, smBreakpoint } from "../../utils/layouts";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "../_shared/StandardCard";
import {
	ThemedActiveProps,
	ThemedProps,
	ThemedWithColorProps,
} from "../../config/styled";
import ToolsList from "../_shared/ToolsList";

type ProjectProps = {
	projectBanners: string[];
	heading: string;
	subheading: string;
	tools: string[];
	team: string;
	achievements: string[];
	bgColor: string;
	gitlink: string;
	viewlink: string;
	viewicon: JSX.Element;
	body: string;
	role: string;
	accColor: string;
};

const ProjectCardContainer = styled(StandardCard)<ThemedProps>`
	height: 100%;
	display: flex;
	flex: 1;
	transition: all 0.25s ease;
	filter: grayscale(80%);
	:hover {
		filter: grayscale(0%);
	}
`;

const ProjectCardContentContainer = styled.div`
	padding: 0.2em 0.625em 1em 0.625em;
	flex: 1;
	@media (max-width: ${`${smBreakpoint}px`}) {
		padding: 0 0 1.5em;
	}
`;

const ProjectCardTextContent = styled.div`
	padding-top: 12px;
`;

const BannerContainer = styled.div`
	height: 100%;
	flex: 1;
	overflow: hidden;
	border-radius: 16px;
	align-items: flex-end;
	background-color: ${(props) => props.color};
`;

const BannerImageContainer = styled.div`
	height: 100%;
	position: relative;
`;

const BannerRelativeContainer = styled.div`
	width: 100%;
	position: relative;
`;

const BannerImage = styled.img<ThemedActiveProps>`
	object-fit: cover;
	position: absolute;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease;
	padding-top: 54px;
	margin-top: -54px;
	border-bottom: solid 1px rgba(255, 255, 255, 0.2);
	opacity: ${(props) => (props.active ? 1 : 0)};
`;

const BannerLinksContainer = styled.div`
	padding: 3px;
	position: absolute;
	top: 0;
	right: 0;
`;

const BannerLinksContentContainer = styled.div`
	margin: 3px;
	float: right;
	clear: both;
	opacity: 0.9;
`;

const BannerButton = styled(Button)`
	height: 50px;
	position: absolute;
	bottom: 2px;
`;

const BannerDotsContainer = styled(Grid)`
	position: absolute;
	width: 100%;
	bottom: 16px;
	pointer-events: none;
`;

const BannerDot = styled(Grid)<ThemedActiveProps>`
	transition: all 0.5s ease;
	filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
	opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

const BannerChevronWrapper = styled.div`
	svg {
		color: #fff;
		opacity: 0.9;
		filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.65));
	}
`;

const ProjectHeading = styled(Typography)<ThemedWithColorProps>`
	color: ${(props) => props.styledcolor};
	font-size: 28px;
	text-decoration: none;
	padding-bottom: 0.5em;
`;

const ProjectSubheading = styled(Typography)<ThemedWithColorProps>`
	color: ${(props) => props.styledcolor};
	font-size: 14px;
	letter-spacing: 0;
	margin-top: 0.6px;
	@media only screen and (max-width: 600px) {
		margin-top: 2px;
	}
`;

const AchievementsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const AchievementText = styled(Typography)<ThemedWithColorProps>`
	margin-bottom: 0.5em;
	font-size: 12px;
	color: ${(props) => props.styledcolor};
	line-height: 1.3;
	:not(:last-child):after {
		white-space: pre;
		content: "  •  ";
	}
`;

const AboutText = styled(Typography)<ThemedWithColorProps>`
	color: ${(props) => props.styledcolor};
	padding-bottom: 4px;
	font-size: 14px;
`;

const DescriptionText = styled(Typography)`
	font-size: 14px;
	margin-bottom: -16px;
`;

const ProjectCard = (props: ProjectProps): JSX.Element => {
	const [bannerIndex, setBannerIndex] = useState(0);
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const isMdWidth = useMediaQuery({ query: `(max-width:${mdBreakpoint}px)` });

	const {
		projectBanners,
		heading,
		subheading,
		tools,
		team,
		achievements,
		bgColor,
		gitlink,
		viewlink,
		viewicon,
		body,
		role,
		accColor,
	} = props;

	const bannerControl = (i: number, len: number) => {
		if (len - 1 === bannerIndex && i >= 0) {
			i = -(len - 1);
		}
		if (0 === bannerIndex && i <= 0) {
			i = len - 1;
		}
		setBannerIndex(bannerIndex + i);
	};

	const getBanner = () => (
		<BannerContainer color={bgColor}>
			<BannerImageContainer>
				{projectBanners.map((banner: string, i: number) => (
					<BannerImage
						key={i}
						alt={`${banner}${i}`}
						active={bannerIndex === i ? 1 : 0}
						src={banner}
						loading="lazy"
					/>
				))}
			</BannerImageContainer>
			<BannerRelativeContainer>
				<BannerButton
					onClick={() => bannerControl(-1, projectBanners.length)}
					style={{ left: "8px" }}
				>
					<BannerChevronWrapper>
						<ChevronLeft />
					</BannerChevronWrapper>
				</BannerButton>
				<BannerButton
					onClick={() => bannerControl(1, projectBanners.length)}
					style={{ right: "8px" }}
				>
					<BannerChevronWrapper>
						<ChevronRight />
					</BannerChevronWrapper>
				</BannerButton>
			</BannerRelativeContainer>
			<BannerLinksContainer>
				<BannerLinksContentContainer>
					<IconButton
						style={{ marginRight: "-4px", color: theme.lightGray }}
						component="a"
						href={viewlink}
						target="_blank"
						rel="noopener noreferrer"
					>
						{viewicon}
					</IconButton>
					<IconButton
						style={{ color: theme.lightGray }}
						component="a"
						href={gitlink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github />
					</IconButton>
				</BannerLinksContentContainer>
			</BannerLinksContainer>
			<BannerRelativeContainer>
				<BannerDotsContainer
					container
					spacing={8}
					direction="row"
					alignItems="center"
					justify="center"
				>
					{projectBanners.map((banner: string, i: number) => (
						<BannerDot
							item
							key={`${banner}${i}dot`}
							active={bannerIndex === i ? 1 : 0}
						>
							<svg height="10" width="10">
								<circle fill="white" cx="3" cy="3" r="3" />
							</svg>
						</BannerDot>
					))}
				</BannerDotsContainer>
			</BannerRelativeContainer>
		</BannerContainer>
	);

	const getHeadings = () => (
		<ProjectCardTextContent>
			<Link
				href={viewlink}
				target="_blank"
				rel="noopener noreferrer"
				style={{ textDecoration: "none" }}
			>
				<ProjectHeading variant="h1" styledcolor={accColor}>
					{heading}
				</ProjectHeading>
			</Link>
			{getAchievements()}
			<ProjectSubheading variant="body1" styledcolor={theme.lightGray}>
				{subheading}
				<br />
				{role}&nbsp; • &nbsp;{team}
			</ProjectSubheading>
			<br />
		</ProjectCardTextContent>
	);

	const getDetailsContainer = () => (
		<Grid container direction="row">
			<Grid item xs={12} container direction="column">
				<ToolsList tools={tools} color={theme.lightGray} isDark={isDark} />
			</Grid>
		</Grid>
	);

	const getAchievements = () => {
		if (achievements.length) {
			return (
				<AchievementsContainer>
					{achievements.map((achievement: string) => (
						<AchievementText
							key={achievement}
							variant="button"
							styledcolor={accColor}
						>
							{achievement}
						</AchievementText>
					))}
				</AchievementsContainer>
			);
		} else {
			return <></>;
		}
	};

	return (
		<ProjectCardContainer isDark={isDark}>
			{!isMdWidth && getBanner()}
			<ProjectCardContentContainer>
				<CardContent>
					{getHeadings()}
					{getDetailsContainer()}
					<br />
					<AboutText variant="overline" styledcolor={accColor}>
						ABOUT
					</AboutText>
					<DescriptionText variant="body1" color="textSecondary">
						{body}
					</DescriptionText>
				</CardContent>
			</ProjectCardContentContainer>
		</ProjectCardContainer>
	);
};

export default ProjectCard;
