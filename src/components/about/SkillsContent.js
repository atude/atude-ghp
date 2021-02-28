import React, { useState } from "react";
import "../Components.css";
import {
	LanguageC,
	LanguageCsharp,
	LanguageHtml5,
	LanguageCss3,
	LanguageJavascript,
	LanguageTypescript,
	LanguagePython,
	Bash as LanguageBash,
	Database as LanguageSQL,
	Coffee as LanguageJava,
	ArrowRightBoldHexagonOutline,
} from "mdi-material-ui";

import Database from "../../data/database";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { smBreakpoint } from "../../utils/layouts";

const SkillsContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-wrap: wrap;
	padding-top: 12px;
	padding-left: 10px;
	height: 120px;
	@media (max-width: ${`${smBreakpoint}px`}) {
		height: 100%;
	}
`;

const TooltipStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 30px;
`;

const TooltipTextStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: all 0.2s ease-out;
	margin-left: 2px;
	font-size: 0.9em;
`;

const TooltipWrapper = (props) => {
	const [active, setActive] = useState(false);
	const { name, defColor, color } = props;

	return (
		<TooltipStyled
			key={name}
			className="Hoverable"
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
		>
			<TooltipTextStyled
				className="Hoverable"
				style={{
					paddingLeft: active ? "12px" : 0,
					marginRight: active ? "-12px" : 0,
				}}
			>
				<ArrowRightBoldHexagonOutline
					style={{
						color: active ? color : defColor,
						marginRight: "6px",
					}}
				/>
				<Typography
					style={{ color: active ? color : defColor, flex: 2 }}
					variant="overline"
				>
					{name}
				</Typography>
			</TooltipTextStyled>
		</TooltipStyled>
	);
};

const SkillsContent = (props) => {
	const getIconSkills = (type) => {
		switch (type) {
			case "C":
				return (
					<TooltipWrapper
						name="C"
						iconComponent={LanguageC}
						color="#3848AA"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "C#":
				return (
					<TooltipWrapper
						name="C#"
						iconComponent={LanguageCsharp}
						color="#A077DB"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "TS":
				return (
					<TooltipWrapper
						name="TypeScript"
						iconComponent={LanguageTypescript}
						color="#0288D1"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "JS":
				return (
					<TooltipWrapper
						name="JavaScript (ES2020)"
						iconComponent={LanguageJavascript}
						color="#dbab18"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "HTML":
				return (
					<TooltipWrapper
						name="HTML5 / CSS3 / SCSS"
						iconComponent={LanguageHtml5}
						color="#EB642D"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "CSS":
				return (
					<TooltipWrapper
						name="CSS3"
						iconComponent={LanguageCss3}
						color="#2Fa5D7"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "Python":
				return (
					<TooltipWrapper
						name="Python"
						iconComponent={LanguagePython}
						color="#0062B9"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "Java":
				return (
					<TooltipWrapper
						name="Java"
						iconComponent={LanguageJava}
						color="#F44336"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "Bash":
				return (
					<TooltipWrapper
						name="Bash"
						iconComponent={LanguageBash}
						color="#47B253"
						defColor={props.currentScheme.lightGray}
					/>
				);
			case "SQL":
				return (
					<TooltipWrapper
						name="SQL"
						iconComponent={LanguageSQL}
						color="#047885"
						defColor={props.currentScheme.lightGray}
					/>
				);
			default:
				return;
		}
	};

	const item = Database["Skillset"];

	return (
		<SkillsContainerStyled>
			{Object.keys(item).map((key) => getIconSkills(key))}
		</SkillsContainerStyled>
	);
};

export default SkillsContent;
