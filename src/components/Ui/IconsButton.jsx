import React from "react";
import { Icons } from "../../assets/icons";
import styled from "styled-components";

export const IconsButton = ({
  icon: Icon,
  children,
  onClick,
  style,
  variant,
  ...rest
}) => {
  return (
    <div>
      <StyledIconsButton
        onClick={onClick}
        style={style}
        variant={variant}
        {...rest}
      >
        {Icon && <Icons />}
        {children}
      </StyledIconsButton>
    </div>
  );
};

const StyledIconsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #9fadbc;
  background-color: #1d2125;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #35393d;
  }
`;
