import React, { useContext } from "react";
import styled from "styled-components";
import { ThemedColorDirectionalProps } from "../../config/styled";
import { ThemeContext } from "../../context/ThemeContext";
import { smBreakpoint } from "../../utils/layouts";

const StandardCardStyled = styled.div<ThemedColorDirectionalProps>`
	transition: border 0.25s ease;
	border: 2px solid transparent;
	:hover {
		border-left: ${(props) =>
			!props.isRight
				? `2px solid ${props.styledcolor}`
				: "2px solid transparent"};
		border-right: ${(props) =>
			props.isRight
				? `2px solid ${props.styledcolor}`
				: "2px solid transparent"};
	}
	@media (max-width: ${`${smBreakpoint}px`}) {
		:hover {
			border: 2px solid transparent;
		}
	}
`;

type Props = {
	isDark: boolean;
	isRight?: boolean;
	className?: string;
};

const StandardCard = (
	props: React.PropsWithChildren<Props> & React.HTMLAttributes<HTMLDivElement>
): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	return (
		<StandardCardStyled styledcolor={themeContext.theme.secondary} {...props}>
			{props.children}
		</StandardCardStyled>
	);
};

export default StandardCard;
