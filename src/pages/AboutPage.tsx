import React, { useContext, useState } from "react";
import ContentCard from "../components/ContentCard";
import { Grid, Avatar, Fade } from "@material-ui/core";
import Database from "../data/database";
import SkillsContent from "../components/about/SkillsContent";
import ToolsContent from "../components/about/ToolsContent";

import imgProfile from "../assets/profile.jpg";
import { ThemeContext } from "../context/ThemeContext";

import styled from "styled-components";
import CubeAnimatedIcon from "../components/icons/animated/CubeAnimatedIcon";
import HelloAnimatedIcon from "../components/icons/animated/HelloAnimatedIcon";

const AvatarContainer = styled(Grid)`
	img {
		filter: grayscale(50%);
		transition: all 0.5s;
	}
	div:not(:first-child) {
		filter: grayscale(80%);
	}
	:hover {
		div:not(:first-child) {
			filter: grayscale(0);
			transform: scale(1.1, 1.1) rotate(45deg);
		}
		img {
			filter: grayscale(0);
		}
	}
`;

const AvatarCircleA = styled.div`
	background-image: linear-gradient(-30deg, #ca68ff, #6eb9ef);
	width: 200px;
	height: 200px;
	position: absolute;
	margin-top: -205px;
	border-radius: 100px;
	z-index: 1;
	transition: all 0.5s;
	margin-left: 14px;
`;

const AvatarCircleB = styled.div`
	background-image: linear-gradient(30deg, #6eb9ef, #62dbaf);
	width: 200px;
	height: 200px;
	position: absolute;
	margin-left: 34px;
	border-radius: 100px;
	z-index: 1;
	transition: all 0.3s;
	margin-top: -220px;
`;

const AvatarCircleC = styled.div`
	background-image: linear-gradient(30deg, #fff268, #ff77a4);
	width: 200px;
	height: 200px;
	position: absolute;
	margin-top: -230px;
	border-radius: 100px;
	z-index: 1;
	transition: all 0.8s;
	margin-left: 8px;
`;

const AboutPage = (): JSX.Element => {
	const [isAvatarLoad, setAvatarLoad] = useState(false);
	const themeContext = useContext(ThemeContext);
	const { theme } = themeContext;

	return (
		<div>
			<Grid
				container
				direction="row"
				spacing={24}
				alignItems="center"
				justify="center"
			>
				<AvatarContainer item>
					<Fade in={isAvatarLoad} timeout={700} style={{ zIndex: 3 }}>
						<Avatar
							src={imgProfile}
							alt="avatar"
							style={{ width: 200, height: 200, margin: 20 }}
							onLoad={() => setAvatarLoad(true)}
						/>
					</Fade>
					<AvatarCircleA />
					<AvatarCircleB />
					<AvatarCircleC />
				</AvatarContainer>
				<Grid item lg={9} sm={12} xs={12}>
					<ContentCard
						animatedIcon={HelloAnimatedIcon}
						heading="I'm Moz, a software engineer in Sydney, Australia."
						paragraphs={Database["About me"]}
						content={<SkillsContent theme={theme} />}
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentCard
						animatedIcon={CubeAnimatedIcon}
						heading="Tech I'm Familiar With"
						paragraphs={Database["Technologies"]}
						content={<ToolsContent theme={theme} />}
					/>
				</Grid>
			</Grid>
			<br />
			<br />
		</div>
	);
};

export default AboutPage;
