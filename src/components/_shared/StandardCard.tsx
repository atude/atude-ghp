import React, { useContext } from "react";
import styled from "styled-components";
import { ThemedProps } from "../../config/styled";
import { ThemeContext } from "../../context/ThemeContext";

const StandardCardStyled = styled.div<ThemedProps>`
	border-radius: 16px;
	background: ${(props) => (props.isDark ? "#2a2929" : "#e9e9e9")};
	box-shadow: ${(props) =>
		props.isDark
			? "12px 12px 24px 0 #242323, -12px -12px 24px 0 #302f2f"
			: "12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 0.4)"};
`;

type Props = {
	isDark: boolean;
	className?: string;
};

const StandardCard = (
	props: React.PropsWithChildren<Props> & React.HTMLAttributes<HTMLDivElement>
): JSX.Element => {
	const themeContext = useContext(ThemeContext);
	return (
		<StandardCardStyled
			isDark={themeContext.isDark}
			className={props.className}
		>
			{props.children}
		</StandardCardStyled>
	);
};

export default StandardCard;
