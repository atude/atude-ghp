import React from "react";
import { Typography, Fade, Slide } from "@material-ui/core";
import styled from "styled-components";
import "./Components.css";

const HeadingContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 2em;
	margin-top: 2em;
	border-radius: 10px;
	padding: 1em;
`;

const DotStyled = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50px;
`;

const LineStyled = styled.div`
	width: 20px;
	height: 4px;
	border-radius: 50px;
	margin: 1em;
`;

const DividerStyled = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 5em auto 7em;
`;

const AnchoredSubheading = (props) => {
	const {
		color,
		prevColor,
		currentScheme,
		isDark,
		title,
		icon,
		id,
		isFirst,
	} = props;

	return (
		<div>
			{!isFirst && (
				<Slide in direction="up" timeout={2000}>
					<div>
						<Fade in timeout={4000}>
							<DividerStyled>
								<LineStyled style={{ backgroundColor: prevColor }} />
								<DotStyled style={{ backgroundColor: prevColor }} />
								<LineStyled style={{ backgroundColor: prevColor }} />
							</DividerStyled>
						</Fade>
					</div>
				</Slide>
			)}
			<HeadingContainerStyled
				id={id}
				className={isDark ? "StandardCardDark" : "StandardCard"}
				style={{
					backgroundColor: color,
				}}
			>
				<Typography
					className="AppbarText"
					style={{
						fontSize: "32px",
						color: currentScheme.bg,
					}}
					variant="h2"
					inline
				>
					{title}
				</Typography>
				{icon}
			</HeadingContainerStyled>
		</div>
	);
};

export default AnchoredSubheading;
