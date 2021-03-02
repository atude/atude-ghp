import React from "react";
import {
	DeveloperBoard,
	FormatColorFill,
	Infinity,
	Server,
	Iframe,
	TimelineText,
	BugCheck,
	Cloud,
} from "mdi-material-ui";
import styled from "styled-components";

type ToolIcon = {
	[key: string]: JSX.Element;
};

const IconWrapper = styled.div`
	svg {
		transition: all 0.1s ease;
		font-size: 28px;
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 2px;
	}
`;

export const toolsCategoryIcon = (type: string): JSX.Element => {
	const toolIcon: ToolIcon = {
		Frontend: <Iframe />,
		Backend: <Server />,
		API: <TimelineText />,
		Testing: <BugCheck />,
		Devops: <Infinity />,
		Cloud: <Cloud />,
		UI: <DeveloperBoard />,
		Design: <FormatColorFill />,
	};

	return <IconWrapper>{toolIcon[type]}</IconWrapper> ?? <></>;
};
