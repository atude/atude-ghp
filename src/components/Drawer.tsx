import React, { useState, useContext } from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Menu, ThemeLightDark } from "mdi-material-ui";
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
	Grid,
	AppBar,
	Toolbar,
	Switch as SwitchButton,
} from "@material-ui/core";

import routes from "../routes/Routes";
import styled from "styled-components";

import { ThemedProps, ThemedWithColorProps } from "../config/styled";
import { Link } from "react-scroll";
import { drawerWidth, smBreakpoint } from "../utils/layouts";
import { ThemeContext } from "../context/ThemeContext";
import SidebarHead from "./drawer/SidebarHead";

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
		borderRight: "none",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

const SidebarDrawerContainer = styled.div<ThemedWithColorProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	background-color: ${(props) => props.styledcolor};
`;

const SidebarListItem = styled(ListItem)<ThemedProps>`
	svg,
	span {
		color: ${(props) => props.theme.lightGray};
	}
	:hover {
		svg,
		span {
			color: ${(props) => props.theme.secondary};
		}
	}
`;

const SidebarRouteIconWrapper = styled(ListItemIcon)`
	padding: 10px;
`;

const SidebarRouteItemText = styled(ListItemText)<ThemedWithColorProps>`
	span {
		font-size: 14px;
		color: ${(props) => props.styledcolor};
	}
`;

const ListDivider = styled.div<ThemedProps>`
	height: 2px;
	width: 92%;
	margin: -10px auto 10px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
`;

const MainContentContainer = styled.div`
	padding: 20px;
	padding-bottom: 100px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	@media (max-width: ${`${smBreakpoint}px`}) {
		padding: 6px;
		padding-bottom: 100px;
	}
`;

const CopyrightText = styled(Typography)`
	padding: 20px 0 30px;
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
	const theme = themeContext.theme;
	const isDark = themeContext.isDark;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleTabClick = () => {
		if (mobileOpen) {
			handleDrawerToggle();
		}
	};

	const getSideListObject = (routeId: string, header: string): JSX.Element => (
		<Link
			to={routeId}
			key={routeId}
			smooth="true"
			style={{ textDecoration: "none" }}
			offset={-50}
		>
			<SidebarListItem
				button
				onClick={() => handleTabClick()}
				key={header}
				theme={theme}
			>
				<SidebarRouteIconWrapper>
					{routes[routeId].icon ?? <></>}
				</SidebarRouteIconWrapper>
				<SidebarRouteItemText
					styledcolor={theme.lightGray}
					primary={
						<Typography color="textPrimary" variant="button">
							{header}
						</Typography>
					}
				/>
			</SidebarListItem>
		</Link>
	);

	const SidebarRoutes = (): JSX.Element => (
		<List>
			<ListDivider color={theme.lightGray} />
			{Object.keys(routes).map(
				(routeId) =>
					routes[routeId].title &&
					getSideListObject(routeId, routes[routeId].title ?? "")
			)}
		</List>
	);

	const SidebarDrawer = () => (
		<SidebarDrawerContainer styledcolor={theme.bg}>
			<MuiThemeProvider theme={theme.muiSidebarTheme}>
				<div>
					<SidebarHead handleTabClick={handleTabClick} />
					<SidebarRoutes />
				</div>
				<div>
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
					<CopyrightText variant="overline">
						Mozamel Anwary © {new Date().getFullYear()}
					</CopyrightText>
				</div>
			</MuiThemeProvider>
		</SidebarDrawerContainer>
	);

	const { classes } = props;

	return (
		<div
			style={{ backgroundColor: theme.bgSecondary }}
			className={classes.root}
		>
			<MuiThemeProvider theme={theme.muiTheme}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
							style={{
								marginTop: "16px",
								backgroundColor: theme.bg,
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
							style={{ borderRight: "none" }}
						>
							<SidebarDrawer />
						</SwipeableDrawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{ paper: classes.drawerPaper }}
							variant="permanent"
							style={{ borderRight: "none" }}
							open
						>
							<SidebarDrawer />
						</Drawer>
					</Hidden>
				</nav>
				<MainContentContainer>
					{Object.keys(routes).map((routeId) => routes[routeId].page)}
				</MainContentContainer>
			</MuiThemeProvider>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
