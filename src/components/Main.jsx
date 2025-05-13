import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "../assets/icons";
import { IconsButton } from "./Ui/IconsButton";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodo } from "../store/thunk/thunkTodo";

export const Main = () => {
  const [formVisible, setformVisible] = useState(false);
  const [on, setOn] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setformVisible(true);
  };

  const handleCloseForm = () => {
    setformVisible(false);
  };

  const handleOn = () => {
    setOn(true);
  };

  const handleOff = () => {
    setOn(false);
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <StyledMain>
      <StyledBackground />
      {!on ? (
        <LeftDiv onClick={handleOn}>
          <IconsButton>
            <img src={Icons.CircleRight} alt="Circle Right" />
          </IconsButton>
        </LeftDiv>
      ) : (
        <CenterDiv>
          <IconsButton onClick={handleOff}>
            <img src={Icons.CircleLeft} alt="Circle Left" />
          </IconsButton>
          <Vkladki>
            <IconsButton>Вкладка-1</IconsButton>
            <IconsButton>Вкладка-2</IconsButton>
            <IconsButton>Вкладка-3</IconsButton>
            <IconsButton>Вкладка-4</IconsButton>
            <IconsButton>Вкладка-5</IconsButton>
            <IconsButton>Вкладка-6</IconsButton>
          </Vkladki>
        </CenterDiv>
      )}

      <Wrapper>
        <TodoList />
        <div>
          {!formVisible ? (
            <IconsButton onClick={handleClick} style={{ height: "50px" }}>
              <img src={Icons.Plus} alt="plus" />
              Добавить ещё одну колонку
            </IconsButton>
          ) : (
            <TodoForm onClose={handleCloseForm} onOpen={handleClick} />
          )}
        </div>
      </Wrapper>
    </StyledMain>
  );
};

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${Icons.Background}) center;
  background-repeat: round;
  background-size: contain;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledMain = styled.main`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 60px 30px;
`;

const LeftDiv = styled.div`
  width: 25px;
  height: 100vh;
  background-color: #000000c1;
  padding-top: 60px;
`;

const CenterDiv = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #000000c1;
  padding-top: 60px;
  padding-left: 200px;
`;

const Vkladki = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  right: 170px;
`;
