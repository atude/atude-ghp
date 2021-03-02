import React, { useContext } from "react";
import { Typography, Tooltip, Fab, Grow, Slide } from "@material-ui/core";
import { FileDownload } from "mdi-material-ui";
import Database from "../data/database";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { PageProps } from "../types";
import { ThemedProps, ThemedWithColorProps } from "../config/styled";

const CircleLarge = styled.div`
	position: absolute;
	left: 10vw;
	top: 10vh;
	width: 40vh;
	height: 40vh;
	border-radius: 100vw;
	background-image: linear-gradient(30deg, #6eb9ef, #62dbaf);
	background-blend-mode: normal;
	filter: drop-shadow(0px 0px 4px #62dbaf);
	transition: all 1.2s ease;
	:hover {
		transform: scale(1.1, 1.1) rotate(90deg);
	}
`;

const CircleMedium = styled.div`
	position: absolute;
	left: 20vw;
	top: -5vh;
	width: 30vh;
	height: 30vh;
	border-radius: 100vw;
	background-image: linear-gradient(30deg, #ca68ff, #6eb9ef);
	background-blend-mode: normal;
	filter: drop-shadow(0px 0px 4px #ca68ff);
	transition: all 1.8s ease;
	:hover {
		transform: scale(1.3, 1.3) rotate(90deg);
	}
`;

const CircleSmall = styled.div`
	position: absolute;
	left: 6vw;
	top: 40vh;
	width: 20vh;
	height: 20vh;
	border-radius: 100vw;
	background-image: linear-gradient(30deg, #fff268, #ff77a4);
	background-blend-mode: normal;
	filter: drop-shadow(0px 0px 4px #ff77a4);
	transition: all 1s ease;
	:hover {
		transform: scale(1.4, 1.4) rotate(-90deg);
	}
`;

const HomePageContainer = styled.div<ThemedProps>`
	margin-top: 100px;
	margin-bottom: 120px;
	padding: 200px;
	background-image: linear-gradient(30deg, #ff77a4, #ca68ff);
	background-blend-mode: normal;
	border-radius: 30px;
	overflow: hidden;
	filter: ${(props) => (props.isDark ? "hue-rotate(-45deg)" : "hue-rotate(0)")};
`;

const MainTextContainer = styled.div`
	margin-left: -150px;
	padding-right: 100px;
`;

const NameTextStyled = styled(Typography)`
	padding-left: 0px;
	font-size: max(2rem, 5vh);
	line-height: max(2rem, 6vh);
	text-align: left;
	opacity: 0.8;
	transition: all 0.5s ease;
	mix-blend-mode: overlay;
	:hover {
		padding-left: 20px;
	}
`;

const PrefixTextStyled = styled(Typography)`
	opacity: 0.8;
	transition: all 0.5s ease;
	font-size: max(1rem, 2vh);
	color: #fff;
`;

const SuffixTextStyled = styled(Typography)`
	opacity: 0.8;
	transition: all 1s ease;
	font-size: max(1.2rem, 2vh);
	line-height: max(1.5rem, 3vh);
	color: #fff;
`;

const FabContainer = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	padding: 24px;
	z-index: 99999;
`;

const FabStyled = styled(Fab)<ThemedWithColorProps>`
	color: #fff;
	background-color: ${(props) => props.styledcolor};
	opacity: 0.9;
`;

const HomePage = (props: PageProps): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const { sectionId } = props;

	return (
		<div id={sectionId}>
			<Grow in timeout={3000}>
				<div>
					<Slide in timeout={750} direction="up">
						<HomePageContainer isDark={isDark}>
							<CircleLarge />
							<CircleMedium />
							<CircleSmall />
							<MainTextContainer>
								<PrefixTextStyled variant="h5">{"Hi, I'm"}</PrefixTextStyled>
								<NameTextStyled>
									Mozamel
									<b> Anwary.</b>
								</NameTextStyled>
								<SuffixTextStyled variant="h5">
									I engineer things for web and mobile.
								</SuffixTextStyled>
							</MainTextContainer>
						</HomePageContainer>
					</Slide>
				</div>
			</Grow>
			<FabContainer>
				<Tooltip title="View My Resume" placement="left">
					<FabStyled
						size="large"
						component="a"
						href={Database["Resume"]}
						download="_resume_mozamel_anwary"
						styledcolor={theme.lightGray}
					>
						<FileDownload />
					</FabStyled>
				</Tooltip>
			</FabContainer>
		</div>
	);
};

export default HomePage;
