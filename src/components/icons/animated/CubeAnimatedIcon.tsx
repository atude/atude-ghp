import React from "react";
import { AnimatedIcon } from ".";
import styled from "styled-components";
import { ThemedHoverProps } from "../../../config/styled";
import { CubeOutline, DotsHexagon } from "mdi-material-ui";

const StyledCubeAnimatedIcon = styled.div<ThemedHoverProps>`
	transform-origin: 50% 50%;
	.cube-outline-icon-1 {
		position: absolute;
		transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
		transform: ${(props) =>
			props.onHover ? "rotate(180deg) scale(1.4)" : "rotate(0) scale(1)"};
		margin-left: ${(props) => (props.onHover ? "11px" : 0)};
	}
	.cube-outline-icon-dots-1 {
		transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
		transform: ${(props) =>
			props.onHover ? "scale(-1.8) rotate(90deg)" : "scale(0) rotate(90deg)"};
		opacity: ${(props) => (props.onHover ? 1 : 0)};
		margin-left: ${(props) => (props.onHover ? "11.1px" : 0)};
	}
`;

const CubeAnimatedIcon: AnimatedIcon = (cardHover: boolean) => {
	return (
		<StyledCubeAnimatedIcon onHover={cardHover}>
			<CubeOutline className="cube-outline-icon-1" />
			<DotsHexagon className="cube-outline-icon-dots-1" />
		</StyledCubeAnimatedIcon>
	);
};

export default CubeAnimatedIcon;
