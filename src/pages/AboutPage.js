import React, { useState } from "react";
import "../components/Components.css";
import ContentCard from "../components/ContentCard.js";
import { Grid, Avatar, Fade } from "@material-ui/core";
import { HumanGreeting, CubeOutline, CodeBraces } from "mdi-material-ui";
import Database from "../assets/Database";
import SkillsContent from "../components/SkillsContent";
import ToolsContent from "../components/ToolsContent";

import imgProfile from "../assets/profile.jpg";
import { getRoutes } from "../Routes";
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
								style={{ color: mainColor }}
								fontSize="large"
								className="ContentCardHeadIcon"
							/>
						}
						heading="Hi, I'm Moz!"
						body={Database["About me"]}
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentCard
						mainColor={mainColor}
						currentScheme={currentScheme}
						isDark={isDark}
						headingIcon={
							<CodeBraces
								style={{ color: mainColor }}
								fontSize="large"
								className="ContentCardHeadIcon"
							/>
						}
						heading="Programming Experience"
						body={""}
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
								style={{ color: mainColor }}
								fontSize="large"
								className="ContentCardHeadIcon"
							/>
						}
						heading="Software Technologies"
						body={""}
						content={<ToolsContent currentScheme={currentScheme} />}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutPage;
