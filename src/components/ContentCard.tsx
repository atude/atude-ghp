import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "./_shared/StandardCard";
import { ThemedProps, ThemedWithColorProps } from "../config/styled";

type Props = {
	heading: string;
	headingIcon: JSX.Element;
	paragraphs: string[];
	content?: JSX.Element;
};

const ContentCardContainer = styled(StandardCard)`
	padding: 2em;
	height: 100%;
	@media only screen and (max-width: 960px) {
		flex-direction: column;
	}
`;

const ContentCardHeadingIcon = styled.div<ThemedProps>`
	svg {
		margin-right: 15px;
		margin-top: -4px;
		float: left;
		color: ${(props) => props.color};
	}
`;

const ContentCardHeading = styled(Typography)<ThemedWithColorProps>`
	color: ${(props) => props.styledcolor};
	font-size: 18px;
	font-weight: 500;
`;

const HighlightText = styled.span`
	font-weight: 600;
	color: ${(props) => props.color};
`;

const ContentCard = (props: Props): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const { theme, isDark } = themeContext;
	const { headingIcon, heading, paragraphs, content } = props;

	return (
		<ContentCardContainer isDark={isDark}>
			{headingIcon && heading && (
				<>
					<ContentCardHeadingIcon color={theme.secondary}>
						{headingIcon}
					</ContentCardHeadingIcon>
					<ContentCardHeading styledcolor={theme.secondary} variant="h2">
						{heading}
					</ContentCardHeading>
					<br />
				</>
			)}
			{paragraphs.map((paragraph) => (
				<div key={paragraph}>
					<Typography
						color="textSecondary"
						style={{ fontSize: "16px", marginBottom: "8px" }}
						variant="body1"
					>
						{/* We use mod to get everything contained withing * xyx * */}
						{paragraph.split("*").map((p: string, i: number) =>
							i % 2 !== 0 ? (
								<HighlightText key={p} color={theme.lightGray}>
									{p}
								</HighlightText>
							) : (
								<span key={p}>{p}</span>
							)
						)}
					</Typography>
				</div>
			))}
			{content !== undefined && content}
		</ContentCardContainer>
	);
};

export default ContentCard;
