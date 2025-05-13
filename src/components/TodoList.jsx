import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

export const TodoList = () => {
  const todos = useSelector((state) => state.todo?.todos || []);

  return (
    <Wrap>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
