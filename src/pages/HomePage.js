import React from "react";
import "../components/Components.css";
import { Typography, Tooltip, Fab, Grow, Slide } from "@material-ui/core";
import { React as ReactIcon, FileDownload } from "mdi-material-ui";
import Database from "../data/database";
import styled from "styled-components";

const darkCircleFilters = "hue-rotate(-45deg)";
const defaultCircleFilter = "hue-rotate(0)";

const NameTextStyled = styled(Typography)`
	padding-left: 0px;
	:hover {
		padding-left: 20px;
	}
`;

const HomePage = (props) => {
	const { currentScheme, isDark, mainColor, sectionId } = props;

	return (
		<div id={sectionId} className="ReferenceAnchor">
			<Grow in timeout={3000}>
				<div>
					<Slide in timeout={3000 / 4} direction="up">
						<div
							className="HomePageCont"
							style={{
								filter: isDark ? darkCircleFilters : defaultCircleFilter,
							}}
						>
							<div className="HomePageCircle1" />
							<div className="HomePageCircle2" />
							<div className="HomePageCircle3" />
							<div className="HomePageTextMain">
								<Typography
									variant="headline"
									style={{
										color: "#ffffff",
										opacity: "0.8",
										transition: "all 0.5s ease",
										fontSize: "max(1rem, 2vh)",
									}}
								>
									Hi, I&apos;m
								</Typography>
								<NameTextStyled
									style={{
										fontSize: "max(2rem, 5vh)",
										lineHeight: "max(2rem, 6vh)",
										textAlign: "left",
										opacity: "0.8",
										transition: "all 0.5s ease",
										mixBlendMode: "overlay",
									}}
								>
									Mozamel
									<b> Anwary.</b>
								</NameTextStyled>
								<Typography
									variant="headline"
									style={{
										color: "#ffffff",
										opacity: "0.8",
										transition: "all 1s ease",
										fontSize: "max(1.2rem, 2vh)",
										lineHeight: "max(1.5rem, 3vh)",
									}}
								>
									I engineer things for web and mobile.
								</Typography>
							</div>
						</div>
					</Slide>
				</div>
			</Grow>
			<div className="BuiltCont">
				<ReactIcon style={{ color: currentScheme.lightGray }} />
			</div>
			<div className="FAB">
				<Tooltip title="View My Resume" placement="left">
					<Fab
						size="large"
						component="a"
						href={Database["Resume"]}
						download="_resume_mozamel_anwary"
						aria-label="DownloadResume"
						style={{
							color: "white",
							backgroundColor: mainColor,
							opacity: "0.9",
						}}
					>
						<FileDownload />
					</Fab>
				</Tooltip>
			</div>
		</div>
	);
};

export default HomePage;
