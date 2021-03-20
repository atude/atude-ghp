import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import StandardCard from "./_shared/StandardCard";
import { ThemedProps, ThemedWithColorProps } from "../config/styled";
import { mdBreakpoint, smBreakpoint } from "../utils/layouts";

type Props = {
	heading: string;
	headingIcon: JSX.Element;
	paragraphs: string[];
	content?: JSX.Element;
};

const ContentCardContainer = styled(StandardCard)`
	padding: 0 2em;
	margin: 2em 0;
	height: 100%;
	@media (max-width: ${`${mdBreakpoint}px`}) {
		flex-direction: column;
	}
	@media (max-width: ${`${smBreakpoint}px`}) {
		padding: 1.5em 1em;
		margin: 0;
	}
`;

const ContentCardHeadingIcon = styled.div<ThemedProps>`
	svg {
		margin-right: 15px;
		margin-top: -4px;
		float: left;
		color: ${(props) => props.color};
	}
	@media (max-width: ${`${smBreakpoint}px`}) {
		display: none;
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
