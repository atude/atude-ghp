import React, { useContext, useState } from "react";
import "../Components.css";
import {
	Typography,
	CardContent,
	Grid,
	Button,
	IconButton,
	Link,
} from "@material-ui/core";
import { Github, OpenInNew, ChevronLeft, ChevronRight } from "mdi-material-ui";
import { useMediaQuery } from "react-responsive";

import { smBreakpoint } from "../../utils/layouts";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "../_shared/StandardCard";
import { ThemedProps } from "../../config/styled";

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

const BannerRelativeContainer = styled.div`
	width: 100%;
	position: relative;
`;

const BannerButton = styled(Button)`
	height: 50px;
	position: absolute;
	bottom: 2px;
`;

const BannerChevronWrapper = styled.div`
	svg {
		color: #fff;
		opacity: 0.9;
		filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.65));
	}
`;

const ProjectCard = (props: any): JSX.Element => {
	const [bannerIndex, setBannerIndex] = useState(0);
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const isSmWidth = useMediaQuery({ query: `(max-width:${smBreakpoint}px)` });

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
			<div className="BannerImgContainer">
				{projectBanners.map((banner: any, i: number) => (
					<img
						key={`${banner}_${i}_banner`}
						alt={`${banner}_${i}_banner`}
						style={{ opacity: bannerIndex === i ? 1 : 0 }}
						className="BannerImg"
						src={banner}
						loading="lazy"
					/>
				))}
			</div>

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
			<div className="BannerShortcutsCont">
				<div className="ViewLink">
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
				</div>
			</div>
			<BannerRelativeContainer>
				<Grid
					className="BannerDots"
					container
					spacing={8}
					direction="row"
					alignItems="center"
					justify="center"
					style={{ width: "100%" }}
				>
					{projectBanners.map((banner: any, i: number) => (
						<Grid
							item
							key={`${banner}_${i}_dot`}
							style={{
								opacity: bannerIndex === i ? 1 : 0.5,
								transition: "all 0.5s ease",
								filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))",
							}}
						>
							<svg height="10" width="10">
								<circle fill="white" cx="3" cy="3" r="3" />
							</svg>
						</Grid>
					))}
				</Grid>
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
				<Typography
					variant="h1"
					style={{
						color: accColor,
						fontSize: "28px",
						textDecoration: "none",
						paddingBottom: "0.5em",
					}}
				>
					{heading}
				</Typography>
			</Link>
			{getAchievements()}
			<div style={{ marginTop: "0.6em" }}>
				<Typography
					className="ProjectCardSubheader"
					variant="body1"
					style={{
						fontSize: "14px",
						color: theme.lightGray,
						letterSpacing: "0px",
					}}
				>
					{subheading}
				</Typography>
			</div>
			<div>
				<Typography
					className="ProjectCardSubheader"
					variant="body1"
					style={{
						fontSize: "14px",
						color: theme.lightGray,
						letterSpacing: "0px",
					}}
				>
					{role}&nbsp; • &nbsp;{team}
				</Typography>
			</div>
			<br />
		</ProjectCardTextContent>
	);

	const getDetailsSectionLeft = (items: any) => (
		<Grid item container>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
				// Offset due to icon padding
				style={{ marginLeft: "-7px" }}
			>
				<Grid container direction="row" justify="flex-start">
					{items}
				</Grid>
			</Grid>
		</Grid>
	);

	const getDetailsContainer = () => (
		<Grid container direction="row">
			<Grid item xs={12} container direction="column">
				{getDetailsSectionLeft(
					Object.keys(tools).map((item) => (
						<Grid key={item + "tool"} item className="DetailsIconLeft">
							{tools[item]}
						</Grid>
					))
				)}
			</Grid>
		</Grid>
	);

	const getAchievements = () => {
		if (achievements.length) {
			return (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-start",
						justifyContent: "flex-start",
						flexWrap: "wrap",
					}}
				>
					{achievements.map((achievement: string, i: number) => (
						<div key={achievement}>
							<Typography
								variant="button"
								style={{
									marginBottom: "0.5em",
									fontSize: "12px",
									color: accColor,
									lineHeight: "1.3",
								}}
							>
								{achievement.split(";")[0]}{" "}
								{i !== achievements.length - 1 && !isSmWidth && (
									<span>&nbsp;|&nbsp;&nbsp;</span>
								)}
								{achievement.split(";").length > 1 && !isSmWidth && (
									<IconButton
										href={achievement.split(";")[1]}
										target="_blank"
										rel="noopener noreferrer"
										style={{ margin: "-22px -14px -20px -5px" }}
									>
										<OpenInNew style={{ fontSize: "16px", color: accColor }} />
									</IconButton>
								)}
							</Typography>
						</div>
					))}
				</div>
			);
		} else {
			return <div />;
		}
	};

	return (
		<ProjectCardContainer isDark={isDark}>
			{getBanner()}
			<ProjectCardContentContainer>
				<CardContent>
					{getHeadings()}
					{getDetailsContainer()}
					<br />
					<Typography
						style={{ color: accColor, paddingBottom: "4px", fontSize: "14px" }}
						variant="overline"
					>
						ABOUT
					</Typography>
					<Typography
						color="textSecondary"
						style={{ fontSize: "14px", marginBottom: "-16px" }}
						variant="body1"
					>
						{body}
					</Typography>
				</CardContent>
			</ProjectCardContentContainer>
		</ProjectCardContainer>
	);
};

export default ProjectCard;
