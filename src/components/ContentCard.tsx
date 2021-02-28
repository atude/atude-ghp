import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "./_shared/StandardCard";

type Props = {
	heading: string;
	headingIcon: JSX.Element;
	body: any;
	content?: JSX.Element;
};

const ContentCardContainer = styled(StandardCard)`
	padding: 2em;
	height: 100%;
	@media only screen and (max-width: 960px) {
		flex-direction: column;
	}
`;

const ContentCardHeadingIcon = styled.div`
	svg {
		margin-right: 15px;
		margin-top: -4px;
		float: left;
	}
`;

const ContentCard = (props: Props): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const { headingIcon, heading, body, content } = props;
	return (
		<ContentCardContainer isDark={isDark}>
			{headingIcon && heading && (
				<>
					<ContentCardHeadingIcon>{headingIcon}</ContentCardHeadingIcon>
					<Typography
						style={{
							color: theme.secondary,
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
			{Object.keys(body).map((key) => (
				<div key={key}>
					<Typography
						style={{
							color: theme.lightGray,
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
		</ContentCardContainer>
	);
};

export default ContentCard;
