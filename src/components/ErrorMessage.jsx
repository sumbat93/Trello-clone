import React from "react";
import styled from "styled-components";

export const ErrorMessage = ({ children }) => {
  return <ErrorMessageComponent>{children}</ErrorMessageComponent>;
};
const ErrorMessageComponent = styled.p`
  position: absolute;
  left: 15px;
  color: red;
  font-size: 12px;
  width: 100%;
  text-align: start;
`;
