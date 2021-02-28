import React, { useContext, useState } from "react";
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
import { ThemeContext } from "../context/ThemeContext";
import { PageProps } from "../types";

const AboutPage = (props: PageProps): JSX.Element => {
	const [isAvatarLoad, setAvatarLoad] = useState(false);
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const { sectionId } = props;

	return (
		<div>
			<AnchoredSubheading
				id={sectionId}
				title={getRoutes()[sectionId].title}
				icon={getRoutes()[sectionId].icAppbar}
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
						mainColor={theme.lightGray}
						currentScheme={theme}
						isDark={isDark}
						headingIcon={
							<HumanGreeting
								style={{ color: theme.secondary }}
								className="ContentCardHeadIcon"
							/>
						}
						heading="Hi! I'm Moz, a software engineer in Sydney, Australia."
						body={Database["About me"]}
						content={<SkillsContent currentScheme={theme} />}
					/>
				</Grid>
				<Grid item xs={12}>
					<ContentCard
						mainColor={theme.lightGray}
						currentScheme={theme}
						isDark={isDark}
						headingIcon={
							<CubeOutline
								style={{ color: theme.secondary }}
								className="ContentCardHeadIcon"
							/>
						}
						heading="Tech I'm Familiar With"
						body={Database["Technologies"]}
						content={<ToolsContent currentScheme={theme} />}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutPage;
