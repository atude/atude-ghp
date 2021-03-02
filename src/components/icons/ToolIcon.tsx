import React from "react";
import styled from "styled-components";
import icons from ".";

const IconWrapper = styled.div`
	svg {
		font-size: 21px;
		margin-left: 5px;
		margin-top: 2px;
	}
`;

const ToolIcon = (type: string): JSX.Element => {
	return <IconWrapper>{icons[type]}</IconWrapper> ?? <></>;
};

export default ToolIcon;
