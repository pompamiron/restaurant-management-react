import React from "react";
import styled, { CSSObject } from "styled-components";

import { colors } from "../../styles/colors";

interface ButtonProps {
  color?: string;
  onClick: () => void;
  children: React.ReactNode;
  style?: CSSObject;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.color || colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background-color: ${(props) => props.color || colors.secondary};
  }
  ${(props) => props.style};
  ${(props) =>
    props.disabled
      ? `
    background-color: ${colors.gray};
    cursor: not-allowed;
  `
      : ""};
`;

const Button: React.FC<ButtonProps> = ({
  color = colors.primary,
  onClick,
  children,
  style,
  disabled = false,
}) => {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
