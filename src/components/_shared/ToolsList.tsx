import { Grid, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import icons from "../icons";
import { ThemedProps } from "../../config/styled";

type Props = {
	tools: string[];
	color: string;
	isDark: boolean;
};

type ToolIconProps = {
	name: string;
	color: string;
	isDark: boolean;
};

const ToolIconContainer = styled(Grid)`
	padding: 5px 0 0 7px;
`;

const ToolIconObjectWrapper = styled.div<ThemedProps>`
	display: flex;
	flex-direction: row;
	transition: all 0.15s ease;
	background: none;

	:hover {
		margin-right: -8px;
		border-radius: 20px;

		/* Target text wrapper */
		:first-child > :last-child {
			visibility: visible;
			opacity: 1;
			margin-left: 0px;
			box-shadow: ${(props) =>
				props.isDark
					? "12px 12px 24px 0 #171e2b, -12px -12px 24px 0 #171e2b"
					: "12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 0.4)"};
			background-color: ${(props) =>
				props.isDark ? "rgba(20, 20, 20, 0.95)" : "rgba(255, 255, 255, 0.95)"};
		}

		/* Target icon svg wrapper */
		:first-child > :first-child {
			padding-left: 6px;
			transition: all 0.15s ease;
			z-index: 1000;
			svg {
				padding-bottom: 3px;
			}
		}
	}
`;

const ToolIconImageWrapper = styled.div`
	transition: all 0.15s ease;
	svg {
		transition: all 0.15s ease;
		color: ${(props) => props.color};
	}
`;

const ToolIconTextWrapper = styled.div`
	position: absolute;
	margin-top: -4px;
	padding: 4px 8px;
	padding-left: 32px;
	border-radius: 20px;
	transition: all 0.15s ease;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;

	p {
		color: ${(props) => props.color};
	}
`;

const ToolIcon = (props: React.PropsWithChildren<ToolIconProps>) => (
	<ToolIconObjectWrapper isDark={props.isDark}>
		<ToolIconImageWrapper color={props.color}>
			{props.children}
		</ToolIconImageWrapper>
		<ToolIconTextWrapper color={props.color}>
			<Typography>{props.name}</Typography>
		</ToolIconTextWrapper>
	</ToolIconObjectWrapper>
);

const ToolsList = (props: Props): JSX.Element => (
	<Grid item container>
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
			// Offset due to icon padding
			style={{ marginLeft: "-7px" }}
		>
			<Grid container direction="row" justify="flex-start">
				{props.tools.map((tool: string, i: number) => (
					<ToolIconContainer item key={i}>
						<ToolIcon name={tool} isDark={props.isDark} color={props.color}>
							{icons[tool]}
						</ToolIcon>
					</ToolIconContainer>
				))}
			</Grid>
		</Grid>
	</Grid>
);

export default ToolsList;
