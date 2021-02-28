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

const ProjectCard = (props: any) => {
	const [bannerIndex, setBannerIndex] = useState(0);
	const [active, setActive] = useState(false);
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
		<div style={{ backgroundColor: bgColor }} className="BannerContainer">
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
			</div>
		</div>
	);

	const getHeadings = () => (
		<div className="ProjectCardTextContent">
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
		</div>
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
						// minHeight: isSmWidth ? "63px" : 0,
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
		<div
			className={`ProjectCard ${isDark ? "StandardCardDark" : "StandardCard"}`}
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
			style={{
				filter: active ? "grayscale(0%)" : "grayscale(80%)",
			}}
		>
			{getBanner()}
			<div className="ProjectCardContent">
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
			</div>
		</div>
	);
};

export default ProjectCard;
