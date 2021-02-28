import React, { useState, useContext } from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import {
	Menu,
	Github,
	Linkedin,
	EmailBox,
	ThemeLightDark,
} from "mdi-material-ui";
import {
	Typography,
	IconButton,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Hidden,
	CssBaseline,
	MuiThemeProvider,
	Drawer,
	Divider,
	Grid,
	AppBar,
	Toolbar,
	Switch as SwitchButton,
} from "@material-ui/core";

import icAtude from "../assets/ic_atude.png";

import database from "../data/database";

import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import HomePage from "../pages/HomePage";

import { getRoutes } from "../routes/Routes";
import { Link } from "react-scroll";
import { drawerWidth } from "../utils/layouts";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import { ThemedProps, ThemedTypographyProps } from "../config/styled";

const styles = (theme: Theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up("md")]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
		boxShadow: "none",
		backgroundColor: "transparent",
		borderRadius: "0px 0px 30px 30px",
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
		[theme.breakpoints.down("md")]: {
			display: "inherit",
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

const SidebarHead = styled.div`
	padding: 20% 30px 0 20px;
	height: 30%;
	min-height: 300px;
	transition: all 10s;
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

const SidebarNameText = styled(Typography)<ThemedTypographyProps>`
	font-size: 24px;
	line-height: 30px;
	text-align: right;
	margin-right: 24px;
	transition: all 1s;
	color: ${(props) => props.textColor};
`;

const SidebarIconWrapper = styled.div`
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

const MainContentContainer = styled.div`
	padding: 20px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
`;

const CopyrightText = styled(Typography)<ThemedTypographyProps>`
	padding: 10px;
	z-index: 0;
	position: static;
	bottom: 8px;
	width: 100%;
	text-align: center;
	font-size: 10px;
	color: #cccccc;
`;

const ResponsiveDrawer = (props: any) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const themeContext = useContext(ThemeContext);
	const currentScheme = themeContext.theme;
	const isDark = themeContext.isDark;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleTabClick = () => {
		if (mobileOpen) {
			handleDrawerToggle();
		}
	};

	const getIcon = (sectionId: string): JSX.Element => {
		const route = getRoutes()[sectionId];
		if (route?.icList) {
			return route.icList;
		}
		return <></>;
	};

	const getSideHead = () => (
		<SidebarHead>
			<Grid container direction="column" alignItems="stretch" justify="center">
				<Grid item>
					<Link
						to="mozamel-main"
						smooth="true"
						style={{ textDecoration: "none" }}
						offset={-150}
					>
						<div style={{ cursor: "pointer" }} onClick={() => handleTabClick()}>
							<SidebarHeadIcon src={icAtude} alt="Atude" isDark={isDark} />
							<SidebarNameText
								textColor={currentScheme.lightGray}
								variant="headline"
							>
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
								<SidebarIconWrapper color={currentScheme.lightGray}>
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
								<SidebarIconWrapper color={currentScheme.lightGray}>
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
								<SidebarIconWrapper color={currentScheme.lightGray}>
									<EmailBox />
								</SidebarIconWrapper>
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</SidebarHead>
	);

	const getSideListObject = (
		sectionId: string,
		header: string
	): JSX.Element => (
		<Link
			to={sectionId}
			smooth="true"
			style={{ textDecoration: "none" }}
			offset={-50}
		>
			<ListItem button onClick={() => handleTabClick()} key={header}>
				<ListItemIcon style={{ padding: "10px" }}>
					{getIcon(sectionId)}
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography
							color="textPrimary"
							variant="button"
							style={{ fontSize: "14px", color: currentScheme.lightGray }}
						>
							{header}
						</Typography>
					}
				/>
			</ListItem>
		</Link>
	);

	const getSideList = () => (
		<List>
			<Divider />
			{getSideListObject("about-me", "About Me")}
			{getSideListObject("projects", "Projects")}
		</List>
	);

	const drawer = () => (
		<div style={{ backgroundColor: currentScheme.bg, height: "100%" }}>
			<MuiThemeProvider theme={currentScheme.muiSidebarTheme}>
				{getSideHead()}
				{getSideList()}
				<Grid container direction="row" alignItems="center" justify="center">
					<Grid item>
						<SwitchButton
							color="primary"
							checked={isDark}
							onChange={() => themeContext.toggleTheme()}
						/>
					</Grid>
					<Grid item>
						<ThemeLightDark style={{ color: "#cccccc", marginTop: "4px" }} />
					</Grid>
				</Grid>
				<CopyrightText variant="overline">Mozamel Anwary © 2020</CopyrightText>
			</MuiThemeProvider>
		</div>
	);

	const { classes } = props;

	return (
		<div className={classes.root}>
			<MuiThemeProvider theme={currentScheme.muiTheme}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
							style={{
								marginTop: "16px",
								backgroundColor: currentScheme.bg,
								opacity: 0.85,
							}}
						>
							<Menu style={{ color: "#555555" }} />
						</IconButton>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					<Hidden smUp implementation="css">
						<SwipeableDrawer
							container={props.container}
							variant="temporary"
							anchor="left"
							open={mobileOpen}
							onClose={handleDrawerToggle}
							onOpen={handleDrawerToggle}
							classes={{ paper: classes.drawerPaper }}
						>
							{drawer()}
						</SwipeableDrawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{ paper: classes.drawerPaper }}
							variant="permanent"
							open
						>
							{drawer()}
						</Drawer>
					</Hidden>
				</nav>

				<MainContentContainer>
					<HomePage sectionId="mozamel-main" />
					<AboutPage sectionId="about-me" />
					<br />
					<br />
					<ProjectsPage sectionId="projects" />
					<br />
					<br />
					<br />
					<br />
				</MainContentContainer>
			</MuiThemeProvider>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
