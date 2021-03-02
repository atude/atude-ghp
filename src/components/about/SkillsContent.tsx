import React from "react";
import { ArrowRightBoldHexagonOutline } from "mdi-material-ui";

import Database from "../../data/database";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { smBreakpoint } from "../../utils/layouts";
import { ThemeScheme } from "../../config/muiConfig";
import { ThemedProps } from "../../config/styled";

const skills = Database["Skillset"];

type Props = {
	theme: ThemeScheme;
};

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
	transition: 0.25s;
	:hover {
		> * {
			padding-left: 12px;
			margin-right: -12px;
		}
	}
`;

const TooltipContentStyled = styled.div<ThemedProps>`
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: all 0.2s ease-out;
	margin-left: 2px;
	font-size: 0.9em;
	span,
	svg {
		color: ${(props) => props.theme.lightGray};
	}
	svg {
		margin-right: 6px;
	}
	:hover {
		transition: 0.25s;
		span,
		svg {
			color: ${(props) => props.theme.secondary};
		}
	}
`;

const SkillsContent = (props: Props): JSX.Element => {
	const { theme } = props;

	return (
		<SkillsContainerStyled>
			{skills.map((skillName: string) => (
				<TooltipStyled key={skillName}>
					<TooltipContentStyled theme={theme}>
						<ArrowRightBoldHexagonOutline />
						<Typography variant="overline">{skillName}</Typography>
					</TooltipContentStyled>
				</TooltipStyled>
			))}
		</SkillsContainerStyled>
	);
};

export default SkillsContent;
