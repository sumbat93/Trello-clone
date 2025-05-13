import React, { useState } from "react";
import styled from "styled-components";
import { IconsButton } from "./Ui/IconsButton";
import { Icons } from "../assets/icons";
import { Input } from "./Ui/Input";
import { useDispatch } from "react-redux";
import { postTodo } from "../store/thunk/thunkTodo";

export const TodoForm = ({ onClose }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Заполните название");
    } else {
      dispatch(postTodo({ title: input }));
      setInput("");
      onClose();
    }
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder={"Название колонки..."}
          style={{ height: "30px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <StyledBtnDiv>
          <StyledButton type="submit">Добавить список</StyledButton>
          <IconsButton onClick={onClose}>
            <img src={Icons.Close} alt="Close" />
          </IconsButton>
        </StyledBtnDiv>
      </StyledForm>
    </div>
  );
};

const StyledButton = styled.button`
  width: 150px;
  height: 32px;
  color: #1d2125;
  background-color: #579dff;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  &:hover {
    background-color: #7cb3ff;
  }
`;

const StyledForm = styled.form`
  width: 250px;
  padding: 10px;
  background-color: #1d2125;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledBtnDiv = styled.div`
  display: flex;
  gap: 5px;
`;
