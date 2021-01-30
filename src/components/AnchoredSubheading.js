import React, { useState } from "react";
import { Typography, Fade, Slide } from "@material-ui/core";
import styled from "styled-components";
import "./Components.css";

const HeadingContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 2em;
	margin-top: 2em;
	border-radius: 10px;
	padding: 1em;
`;

const HeadingContentStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const SubtitleStyled = styled(Typography)`
	margin-left: 24px;
`;

const DotStyled = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50px;
`;

const LineStyled = styled.div`
	height: 4px;
	border-radius: 50px;
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
	const [active, setActive] = useState(false);
	const {
		color,
		prevColor,
		currentScheme,
		isDark,
		title,
		subtitle,
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
							<DividerStyled
								onMouseEnter={() => setActive(true)}
								onMouseLeave={() => setActive(false)}
							>
								<LineStyled
									style={{
										backgroundColor: prevColor,
										transition: "all 0.5s ease",
										marginRight: active ? "4em" : "1em",
										width: active ? "120px" : "20px",
									}}
								/>
								<DotStyled
									style={{
										backgroundColor: prevColor,
										transition: "all 0.5s ease",
										transform: active ? "scale(0.8, 0.8)" : "scale(1, 1)",
									}}
								/>
								<LineStyled
									style={{
										backgroundColor: prevColor,
										transition: "all 0.5s ease",
										marginLeft: active ? "4em" : "1em",
										width: active ? "120px" : "20px",
									}}
								/>
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
				<HeadingContentStyled>
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
				</HeadingContentStyled>
				{!!subtitle && (
					<SubtitleStyled
						style={{
							fontSize: "16px",
							color: currentScheme.bg,
						}}
					>
						{subtitle}
					</SubtitleStyled>
				)}
			</HeadingContainerStyled>
		</div>
	);
};

export default AnchoredSubheading;
