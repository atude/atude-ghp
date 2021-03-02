import React, { useContext } from "react";
import styled from "styled-components";
import icAtude from "../../assets/ic_atude.png";
import database from "../../data/database";

import { Github, Linkedin, EmailBox } from "mdi-material-ui";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { ThemedProps, ThemedWithColorProps } from "../../config/styled";
import { Link } from "react-scroll";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
	handleTabClick: () => void;
};

const SidebarHeadContainer = styled.div`
	padding: 20% 30px 0 20px;
	transition: all 10s;
	padding-bottom: 30px;
`;

const SidebarHeadIcon = styled.img<ThemedProps>`
	:hover {
		padding: 10px;
	}
	width: 90px;
	height: 90px;
	float: left;
	margin-left: 20px;
	margin-top: -16px;
	transition: all 1s;
	filter: ${(props) =>
		!props.isDark ? "invert(0%)" : "invert(100%) grayscale(100%)"};
`;

const SidebarNameText = styled(Typography)<ThemedWithColorProps>`
	font-size: 24px;
	line-height: 30px;
	text-align: right;
	margin-right: 24px;
	transition: all 1s;
	color: ${(props) => props.styledcolor};
`;

const SidebarIconWrapper = styled.div`
	margin-bottom: -5px;
	svg {
		font-size: 40px;
		color: ${(props) => props.color};
		:not(:hover) {
			transition: all 0.25s;
		}
		:hover {
			transform: scale(1.15);
			transition: all 0.25s;
		}
	}
`;

const SidebarHead = (props: Props): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const { handleTabClick } = props;

	return (
		<SidebarHeadContainer>
			<Grid container direction="column" alignItems="stretch" justify="center">
				<Grid item>
					<Link
						to="home"
						smooth="true"
						style={{ textDecoration: "none" }}
						offset={-150}
					>
						<div style={{ cursor: "pointer" }} onClick={handleTabClick}>
							<SidebarHeadIcon src={icAtude} alt="Atude" isDark={isDark} />
							<SidebarNameText styledcolor={theme.lightGray} variant="h5">
								Mozamel
								<br />
								<b>Anwary</b>
							</SidebarNameText>
						</div>
					</Link>
				</Grid>
				<Grid item>
					<Grid
						container
						direction="row"
						alignItems="stretch"
						justify="space-around"
					>
						<Grid item>
							<IconButton
								key="Github"
								component="a"
								href={database.Contact.Links.GitHub[0]}
								target="_blank"
								rel="noopener noreferrer"
							>
								<SidebarIconWrapper color={theme.lightGray}>
									<Github />
								</SidebarIconWrapper>
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton
								key="LinkedIn"
								component="a"
								href={database.Contact.Links.LinkedIn[0]}
								target="_blank"
								rel="noopener noreferrer"
							>
								<SidebarIconWrapper color={theme.lightGray}>
									<Linkedin />
								</SidebarIconWrapper>
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton
								key="Email"
								component="a"
								href={`mailto:${database.Contact.Contact.Email}`}
							>
								<SidebarIconWrapper color={theme.lightGray}>
									<EmailBox />
								</SidebarIconWrapper>
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</SidebarHeadContainer>
	);
};

export default SidebarHead;
