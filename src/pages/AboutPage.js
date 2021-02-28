import React, { useState } from "react";
import "../components/Components.css";
import ContentCard from "../components/ContentCard.js";
import { Grid, Avatar, Fade } from "@material-ui/core";
import { CubeOutline, HumanGreeting } from "mdi-material-ui";
import Database from "../data/database";
import SkillsContent from "../components/SkillsContent";
import ToolsContent from "../components/ToolsContent";

import imgProfile from "../assets/profile.jpg";
import { getRoutes } from "../routes/Routes";
import AnchoredSubheading from "../components/AnchoredSubheading";

const AboutPage = (props) => {
	const [isAvatarLoad, setAvatarLoad] = useState(false);
	const { mainColor, prevColor, currentScheme, isDark, sectionId } = props;

	return (
		<div>
			<AnchoredSubheading
				id={sectionId}
				color={mainColor}
				prevColor={prevColor}
				title={getRoutes(currentScheme)[sectionId].title}
				icon={getRoutes(currentScheme)[sectionId].icAppbar}
				currentScheme={currentScheme}
				isDark={isDark}
			/>
			<Grid
				container
				direction="row"
				spacing={24}
				alignItems="center"
				justify="center"
			>
				<Grid item>
					<Fade in={isAvatarLoad} timeout={700}>
						<div className="AvatarImg">
							<Avatar
								src={imgProfile}
								alt="avatar"
								style={{
									width: 200,
									height: 200,
									margin: 20,
								}}
								onLoad={() => setAvatarLoad(true)}
							/>
						</div>
					</Fade>
					<div className="AvatarBgCircle" />
					<div className="AvatarBgCircle2" />
					<div className="AvatarBgCircle3" />
				</Grid>
				<Grid item lg={9} sm={12} xs={12}>
					<ContentCard
						mainColor={mainColor}
						currentScheme={currentScheme}
						isDark={isDark}
						headingIcon={
							<HumanGreeting
								style={{ color: currentScheme.secondary }}
								className="ContentCardHeadIcon"
							/>
						}
						heading="Hi! I'm Moz, a software engineer in Sydney, Australia."
						body={Database["About me"]}
						content={<SkillsContent currentScheme={currentScheme} />}
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentCard
						mainColor={mainColor}
						currentScheme={currentScheme}
						isDark={isDark}
						headingIcon={
							<CubeOutline
								style={{ color: currentScheme.secondary }}
								className="ContentCardHeadIcon"
							/>
						}
						heading="Tech I'm Familiar With"
						body={Database["Technologies"]}
						content={<ToolsContent currentScheme={currentScheme} />}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutPage;
