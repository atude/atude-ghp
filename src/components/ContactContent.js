import React from "react";
import "../components/Components.css";
import { Grid, Typography } from "@material-ui/core";
import {
	Github,
	Linkedin,
	EmailMarkAsUnread,
	Discord,
	GooglePlay,
} from "mdi-material-ui";

const ContactContent = (props) => {
	const { source, isLinks, currentScheme, mainColor } = props;

	const getIconObj = (type) => {
		const cStyle = {
			fontSize: "38px",
			color: currentScheme.lightGray,
		};
		const icons = {
			GitHub: <Github style={cStyle} className="ContactIcon" />,
			"Play Store": <GooglePlay style={cStyle} className="ContactIcon" />,
			LinkedIn: <Linkedin style={cStyle} className="ContactIcon" />,
			Email: <EmailMarkAsUnread style={cStyle} />,
			Discord: <Discord style={cStyle} />,
		};

		return icons[type];
	};

	const getIcon = (name, link) => {
		return (
			<Grid
				item
				xs={3}
				component="a"
				href={link}
				rel="noopener noreferrer"
				target="_blank"
			>
				{getIconObj(name)}
			</Grid>
		);
	};

	const getName = (name, desc, link) => {
		return (
			<Grid item xs={9}>
				<Typography
					variant="overline"
					style={{
						textDecoration: "none",
						fontSize: "15px",
						color: mainColor,
					}}
					component="a"
					href={link}
					rel="noopener noreferrer"
					target="_blank"
				>
					{name}
				</Typography>
				<Typography
					style={{
						fontSize: "12px",
						color: currentScheme.lightGray,
						wordWrap: "break-word",
					}}
					variant="body1"
				>
					{desc}
				</Typography>
			</Grid>
		);
	};

	return (
		<Grid
			container
			direction="column"
			alignItems="flex-start"
			justify="center"
			spacing={16}
			className="ContactContentCont"
		>
			{Object.keys(source).map((key) => (
				<Grid item container direction="row" key={key} xs={12}>
					{getIcon(key, isLinks ? source[key][0] : null)}
					{isLinks
						? getName(key, source[key][1], source[key][0])
						: getName(key, source[key])}
				</Grid>
			))}
		</Grid>
	);
};

export default ContactContent;
