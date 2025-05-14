import React from "react";
import styled from "styled-components";

export const Input = ({
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) => {
  return (
    <InputWrapper>
      {Icon && <IconContainer>{Icon}</IconContainer>}
      <StyledInput
        type={type}
        style={style}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  left: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #829bb5;
  padding-left: 30px;
  background-color: #1d2125;
  color: #829bb5;
`;
