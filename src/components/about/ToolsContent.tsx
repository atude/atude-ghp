import React from "react";
import "../Components.css";
import { Grid, Typography, Chip, Divider } from "@material-ui/core";

import Database from "../../data/database";
import { mdBreakpoint } from "../../utils/layouts";
import { useMediaQuery } from "react-responsive";
import { toolsIcon } from "../icons/toolsIcons";
import { toolsCategoryIcon } from "../icons/toolsCategoryIcons";
import { ThemeScheme } from "../../config/muiConfig";
import styled from "styled-components";
import { ThemedProps, ThemedWithColorProps } from "../../config/styled";

const tools = Database["Toolset"];

type Props = {
	theme: ThemeScheme;
};

const ToolsContainer = styled(Grid)`
	padding-top: 30px;
	padding-left: 5px;
	padding-right: 5px;
`;

const ToolsContentContainer = styled(Grid)<ThemedProps>`
	span,
	svg {
		transition: all 0.1s ease;
		color: ${(props) => props.theme.lightGray};
	}
	:hover {
		span,
		svg {
			color: ${(props) => props.color};
		}
	}
`;

const ToolsCategoryIconContainer = styled(Grid)`
	margin-top: 4px;
`;

const ToolsCategoryTextContainer = styled(Grid)`
	margin-top: 5px;
`;

const ToolsCategoryText = styled(Typography)<ThemedProps>`
	transition: all 0.1s ease;
	display: flex;
	margin-top: -5px;
	font-size: 0.9em;
	font-weight: 500;
`;

const ToolChip = styled(Chip)<ThemedWithColorProps>`
	transition: all 0.1s ease;
	color: ${(props) => props.color};
	* > span {
		padding-left: 2.5px;
	}
`;

const StyledDivider = styled(Divider)`
	width: 100%;
	margin-top: 25px;
	margin-bottom: 15px;
`;

const ToolsContent = (props: Props): JSX.Element => {
	const isMdWidth = useMediaQuery({ query: `(max-width:${mdBreakpoint}px)` });
	const { theme } = props;
	const colorSet = theme.colorSet;

	return (
		<ToolsContainer container direction="column" spacing={16}>
			{Object.keys(tools).map((toolskey: string, i: number) => (
				<ToolsContentContainer
					item
					key={toolskey}
					container
					spacing={isMdWidth ? 16 : 8}
					direction="row"
					justify="flex-start"
					theme={theme}
					color={Object.values(colorSet)[i]}
				>
					<ToolsCategoryIconContainer item xs={2} md={1}>
						{toolsCategoryIcon(toolskey)}
					</ToolsCategoryIconContainer>
					<ToolsCategoryTextContainer item xs={9} md={3} lg={2}>
						<ToolsCategoryText variant="overline">{toolskey}</ToolsCategoryText>
					</ToolsCategoryTextContainer>
					<Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
						<Grid
							container
							spacing={8}
							direction="row"
							alignItems="center"
							justify={isMdWidth ? "flex-start" : "flex-end"}
						>
							{tools[toolskey].map((key: string) => (
								<Grid item key={key}>
									<ToolChip
										variant="default"
										icon={toolsIcon(key)}
										label={<span>{key}</span>}
										styledcolor={theme.bg}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
					{!!isMdWidth && i !== Object.keys(tools).length - 1 && (
						<StyledDivider />
					)}
				</ToolsContentContainer>
			))}
		</ToolsContainer>
	);
};

export default ToolsContent;
