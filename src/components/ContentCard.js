import React from "react";
import "./Components.css";
import { Typography } from "@material-ui/core";

const ContentCard = (props) => {
	const {
		headingIcon,
		heading,
		body,
		content,
		mainColor,
		isDark,
		currentScheme,
	} = props;
	return (
		<div
			className={`ContentCard ${isDark ? "StandardCardDark" : "StandardCard"}`}
		>
			{/* Heading */}
			{headingIcon && heading && (
				<>
					{headingIcon}
					<Typography
						style={{
							color: currentScheme.secondary,
							fontSize: "18px",
							fontWeight: 500,
						}}
						variant="h2"
					>
						{heading}
					</Typography>
					<br />
				</>
			)}
			{/* Body */}
			{Object.keys(body).map((key) => (
				<div key={key}>
					<Typography
						style={{
							color: mainColor,
							fontSize: "16px",
							marginBottom: "10px",
							fontWeight: 500,
						}}
						variant="headline"
					>
						{key !== "" && !key.includes("NULL") && key}
					</Typography>
					<Typography
						color="textSecondary"
						style={{ fontSize: "16px", marginBottom: "8px" }}
						variant="body1"
					>
						{body[key]}
					</Typography>
				</div>
			))}

			{content !== undefined && content}
		</div>
	);
};

export default ContentCard;
