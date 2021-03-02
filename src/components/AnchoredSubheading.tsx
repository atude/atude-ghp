import React, { useContext, useState } from "react";
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

const Dot = styled.div<ThemedActiveProps>`
	width: 20px;
	height: 20px;
	border-radius: 50px;
	background-color: ${(props) => props.color};
	transition: all 0.5s ease;
	transform: ${(props) => (props.active ? "scale(0.8, 0.8)" : "scale(1, 1)")};
`;

const Line = styled.div<ThemedActiveProps & ThemedLineProps>`
	height: 4px;
	border-radius: 50px;
	transition: all 0.5s ease;
	background-color: ${(props) => props.color};
	width: ${(props) => (props.active ? "120px" : "20px")};
	margin-right: ${(props) => (props.active && props.right ? "4em" : "1em")};
	margin-left: ${(props) => (props.active && props.left ? "4em" : "1em")};
`;

const DividerStyled = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 5em auto 7em;
`;

const AnchoredSubheading = (props: Props): JSX.Element => {
	const [active, setActive] = useState(false);
	const themeContext = useContext(ThemeContext);
	const theme = themeContext.theme;
	const { title, icon, id } = props;

	return (
		<div>
			<Slide in direction="up" timeout={2000}>
				<div>
					<Fade in timeout={4000}>
						<DividerStyled
							onMouseEnter={() => setActive(true)}
							onMouseLeave={() => setActive(false)}
						>
							<Line color={theme.lightGray} active={active ? 1 : 0} right />
							<Dot color={theme.lightGray} active={active ? 1 : 0} />
							<Line color={theme.lightGray} active={active ? 1 : 0} left />
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
