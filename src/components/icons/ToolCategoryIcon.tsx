import React from "react";
import styled from "styled-components";
import icons from ".";

const IconWrapper = styled.div`
	svg {
		transition: all 0.1s ease;
		font-size: 28px;
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 2px;
	}
`;

const ToolCategoryIcon = (type: string): JSX.Element => {
	return <IconWrapper>{icons[type]}</IconWrapper> ?? <></>;
};

export default ToolCategoryIcon;
