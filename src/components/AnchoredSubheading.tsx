import React, { useContext } from "react";
import { Typography, Fade, Slide } from "@material-ui/core";
import styled from "styled-components";
import {
	ThemedActiveProps,
	ThemedProps,
	ThemedWithColorProps,
} from "../config/styled";
import { ThemeContext } from "../context/ThemeContext";

type ThemedLineProps = {
	right?: boolean;
	left?: boolean;
};

type Props = {
	title: string;
	icon?: JSX.Element;
	id: string;
	isFirst?: boolean;
};

const HeadingContainerStyled = styled.div<ThemedProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 2em;
	margin-top: 2em;
	border-radius: 10px;
	padding: 1em;
	background-color: ${(props) => props.color};
`;

const HeadingContentStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const HeadingContentText = styled(Typography)<ThemedWithColorProps>`
	font-size: 32px;
	color: ${(props) => props.styledcolor};
	width: 100%;
	padding-left: 16px;
`;

const HeadingIconWrapper = styled.div<ThemedWithColorProps>`
	svg {
		font-size: 80px;
		padding: 15px;
		float: right;
		color: ${(props) => props.styledcolor};
	}
`;

const Dot = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50px;
	background-color: ${(props) => props.color};
	transition: all 0.25s ease;
`;

const Line = styled.div`
	height: 4px;
	border-radius: 50px;
	transition: all 0.4s ease;
	background-color: ${(props) => props.color};
	width: 20px;
	margin-right: 1em;
	margin-left: 1em;
`;

const DividerStyled = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 5em auto 7em;
	:hover {
		:first-child > :first-child {
			width: 120px;
			margin-right: 4em;
		}
		:first-child > :last-child {
			width: 120px;
			margin-left: 4em;
		}
		:first-child > :nth-child(2) {
			transform: scale(0.8, 0.8);
		}
	}
`;

const AnchoredSubheading = (props: Props): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	const theme = themeContext.theme;
	const { title, icon, id } = props;

	return (
		<div>
			<Slide in direction="up" timeout={2000}>
				<div>
					<Fade in timeout={4000}>
						<DividerStyled>
							<Line color={theme.lightGray} />
							<Dot color={theme.lightGray} />
							<Line color={theme.lightGray} />
						</DividerStyled>
					</Fade>
				</div>
			</Slide>
			<HeadingContainerStyled id={id} color={theme.lightGray}>
				<HeadingContentStyled>
					<HeadingContentText styledcolor={theme.bg} variant="h2" inline>
						{title}
					</HeadingContentText>
					<HeadingIconWrapper styledcolor={theme.bg}>{icon}</HeadingIconWrapper>
				</HeadingContentStyled>
			</HeadingContainerStyled>
		</div>
	);
};

export default AnchoredSubheading;
