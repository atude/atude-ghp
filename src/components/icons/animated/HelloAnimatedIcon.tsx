import React from "react";
import { AnimatedIcon } from ".";
import styled from "styled-components";
import { ThemedHoverProps } from "../../../config/styled";
import { CircleOutline, HumanGreeting } from "mdi-material-ui";

const StyledHelloAnimatedIcon = styled.div<ThemedHoverProps>`
	transform-origin: 50% 50%;
	.greeting-icon-1 {
		position: absolute;
		transition: all 0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6);
		transform: ${(props) =>
			props.onHover ? "rotate(-10deg) scale(0.8)" : "rotate(0) scale(1)"};
		margin-left: ${(props) => (props.onHover ? "11px" : 0)};
	}
	.greeting-circle-icon-1 {
		transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
		transform: ${(props) =>
			props.onHover ? "scale(2) rotate(90deg)" : "scale(1.5) rotate(90deg)"};
		opacity: ${(props) => (props.onHover ? 1 : 0)};
		margin-left: ${(props) => (props.onHover ? "11px" : 0)};
	}
`;

const HelloAnimatedIcon: AnimatedIcon = (cardHover: boolean) => {
	return (
		<StyledHelloAnimatedIcon onHover={cardHover}>
			<HumanGreeting className="greeting-icon-1" />
			<CircleOutline className="greeting-circle-icon-1" />
		</StyledHelloAnimatedIcon>
	);
};

export default HelloAnimatedIcon;
