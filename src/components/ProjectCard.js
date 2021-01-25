import React, { useState } from "react";
import "./Components.css";
import {
	Typography,
	CardContent,
	Grid,
	Button,
	IconButton,
} from "@material-ui/core";
import { Github, OpenInNew, ChevronLeft, ChevronRight } from "mdi-material-ui";
import { useMediaQuery } from "react-responsive";

import { smBreakpoint } from "../utils/layouts";

const ProjectCard = (props) => {
	const [bannerIndex, setBannerIndex] = useState(0);
	const [active, setActive] = useState(false);
	const isSmWidth = useMediaQuery({ query: `(max-width:${smBreakpoint}px)` });

	const bannerControl = (i, len) => {
		if (len - 1 === bannerIndex && i >= 0) {
			i = -(len - 1);
		}
		if (0 === bannerIndex && i <= 0) {
			i = len - 1;
		}
		setBannerIndex(bannerIndex + i);
	};

	const getBanner = (
		bgColor,
		projectBanners,
		viewicon,
		gitlink,
		viewlink,
		currentScheme
	) => {
		return (
			<div style={{ backgroundColor: bgColor }} className="BannerContainer">
				<div className="BannerImgContainer">
					{projectBanners.map((banner, i) => (
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

				<div className="BannerRelativeContainer">
					<Button
						className="BannerLeft"
						onClick={() => bannerControl(-1, projectBanners.length)}
						style={{ position: "absolute", bottom: "2px", left: "8px" }}
					>
						<ChevronLeft
							style={{
								color: "white",
								opacity: 0.9,
								filter: "drop-shadow(0 0 4px rgba(0,0,0,0.65))",
							}}
						/>
					</Button>
					<Button
						className="BannerRight"
						onClick={() => bannerControl(1, projectBanners.length)}
						style={{ position: "absolute", bottom: "2px", right: "8px" }}
					>
						<ChevronRight
							style={{
								color: "white",
								opacity: 0.9,
								filter: "drop-shadow(0 0 4px rgba(0,0,0,0.65))",
							}}
						/>
					</Button>
				</div>

				<div className="BannerShortcutsCont">
					<div className="ViewLink">
						<IconButton
							style={{ marginRight: "-4px", color: currentScheme.lightGray }}
							component="a"
							href={viewlink}
							target="_blank"
							rel="noopener noreferrer"
						>
							{viewicon}
						</IconButton>
						<IconButton
							style={{ color: currentScheme.lightGray }}
							component="a"
							href={gitlink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github />
						</IconButton>
					</div>
				</div>

				{/* Banner carousel dots */}
				<div className="BannerRelativeContainer">
					<Grid
						className="BannerDots"
						container
						spacing={8}
						direction="row"
						alignItems="center"
						justify="center"
						style={{ width: "100%" }}
					>
						{projectBanners.map((banner, i) => (
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
				</div>
			</div>
		);
	};

	const getHeadings = (
		projectIcon,
		viewlink,
		accColor,
		heading,
		lightGray,
		subheading,
		role,
		team,
		date
	) => {
		return (
			<div className="ProjectCardTextContent">
				{projectIcon}
				<Typography
					component="a"
					href={viewlink}
					target="_blank"
					rel="noopener noreferrer"
					variant="h1"
					style={{
						color: accColor,
						fontSize: "28px",
						textDecoration: "none",
					}}
				>
					{heading}
				</Typography>
				<div style={{ marginTop: "2px" }}>
					<Typography
						className="ProjectCardSubheader"
						variant="body1"
						style={{
							fontSize: "14px",
							color: lightGray,
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
							color: lightGray,
							letterSpacing: "0px",
						}}
					>
						{role}&nbsp; • &nbsp;{team}&nbsp; • &nbsp;{date}
					</Typography>
				</div>
				<br />
			</div>
		);
	};

	const getDetailsSectionLeft = (categoryStyle, rightPadding, items) => (
		<Grid item container>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
			>
				<Grid container direction="row" justify="center">
					{items}
				</Grid>
			</Grid>
		</Grid>
	);

	const getDetailsContainer = (categoryStyle, built, tools) => (
		<Grid container direction="row">
			<Grid item xs={12} container direction="column">
				{getDetailsSectionLeft(categoryStyle, 10, [
					...Object.keys(built).map((item) => (
						<Grid key={item + "built"} item className="DetailsIconLeft">
							{built[item]}
						</Grid>
					)),
					...Object.keys(tools).map((item) => (
						<Grid key={item + "tool"} item className="DetailsIconLeft">
							{tools[item]}
						</Grid>
					)),
				])}
			</Grid>
		</Grid>
	);

	const getAchievements = (
		achievements,
		mainColor,
		accColor,
		currentScheme
	) => {
		if (achievements.length) {
			return (
				<div
					style={{
						paddingBottom: "20px",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						minHeight: isSmWidth ? "63px" : 0,
					}}
				>
					{achievements.map((achievement) => (
						<div
							key={achievement}
							style={{
								marginTop: "8px",
								marginRight: "6px",
								padding: "4px",
								backgroundColor: accColor,
								borderRadius: 30,
							}}
						>
							<Typography
								variant="button"
								style={{
									paddingLeft: "12px",
									paddingRight: "12px",
									paddingTop: "3px",
									paddingBottom: "3px",
									fontSize: "12px",
									color: "#fff",
									textAlign: "center",
								}}
							>
								{achievement.split(";")[0]}
								{achievement.split(";").length > 1 && (
									<IconButton
										href={achievement.split(";")[1]}
										target="_blank"
										rel="noopener noreferrer"
										style={{ margin: "-12px -14px -10px -5px" }}
									>
										<OpenInNew style={{ fontSize: "16px", color: "#fff" }} />
									</IconButton>
								)}
							</Typography>
						</div>
					))}
				</div>
			);
		} else {
			return (
				<div
					style={{
						margin: "25px auto 34px",
						paddingTop: "2px",
						backgroundColor: currentScheme.lightGray,
						borderRadius: 30,
						width: "50px",
						opacity: 0.1,
					}}
				/>
			);
		}
	};

	const {
		projectIcon,
		projectBanners,
		heading,
		subheading,
		tools,
		team,
		built,
		date,
		achievements,
		bgColor,
		gitlink,
		viewlink,
		viewicon,
		body,
		role,
		mainColor,
		accColor,
		currentScheme,
		isDark,
	} = props;

	const lightGray = currentScheme.lightGray;
	const categoryStyle = {
		fontSize: "14px",
		color: lightGray,
		letterSpacing: "0.1px",
	};

	return (
		<div
			className={`ProjectCard ${isDark ? "StandardCardDark" : "StandardCard"}`}
			style={{
				filter: active ? "grayscale(0%)" : "grayscale(80%)",
				transition: "all 0.2s",
			}}
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
		>
			{getBanner(
				bgColor,
				projectBanners,
				viewicon,
				gitlink,
				viewlink,
				currentScheme
			)}
			<div className="ProjectCardContent">
				<CardContent>
					{getHeadings(
						projectIcon,
						viewlink,
						accColor,
						heading,
						lightGray,
						subheading,
						role,
						team,
						date
					)}
					{getAchievements(achievements, mainColor, accColor, currentScheme)}
					{getDetailsContainer(categoryStyle, built, tools)}
					<br />
					{/* About */}
					<Typography
						style={{ color: accColor, paddingBottom: "4px", fontSize: "14px" }}
						variant="overline"
					>
						ABOUT
					</Typography>
					{/* Body */}
					<Typography
						color="textSecondary"
						style={{ fontSize: "14px", marginBottom: "-16px" }}
						variant="body1"
					>
						{body}
					</Typography>
				</CardContent>
			</div>
		</div>
	);
};

export default ProjectCard;
