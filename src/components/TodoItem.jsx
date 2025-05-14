import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "../assets/icons";
import { IconsButton } from "./Ui/IconsButton";
import { Input } from "./Ui/Input";
import { useDispatch } from "react-redux";
import { useModal } from "../context/ModalContext";
import {
  addDescriptionToTodo,
  deleteDescription,
  deleteTitle,
} from "../store/thunk/thunkTodo";

export const TodoItem = ({ todo, todoId, descriptionId, currentText }) => {
  const [input, setInput] = useState("");
  const [formVisible, setformVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [collaps, setCollaps] = useState(false);

  const dispatch = useDispatch();
  const description = Array.isArray(todo.description) ? todo.description : [];
  const { openModal, closeModal } = useModal();

  const handleClick = () => {
    setformVisible(true);
  };

  const handleCloseForm = () => {
    setformVisible(false);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((checkedItems) => ({
      ...checkedItems,
      [id]: !checkedItems[id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Заполните описание");
    } else {
      dispatch(addDescriptionToTodo({ todoId: todo.id, description: input }));
      setInput("");
      setformVisible(false);
    }
  };

  const handleDeleteTitle = (todoId) => {
    dispatch(deleteTitle(todoId));
    closeModal();
  };

  const handleDeleteDescription = (todoId, descriptionId) => {
    dispatch(deleteDescription({ todoId, descriptionId }));
  };

  return (
    <div>
      {todo.title === "" ? null : (
        <StyledGlobalDiv collaps={collaps}>
          <StyledWrap>
            <h4>{todo.title}</h4>
            <StyledDiv>
              <IconsButton
                onClick={() => setCollaps(!collaps)}
                style={{ backgroundColor: "#101204" }}
              >
                <img
                  src={Icons.Hide}
                  alt="Hide"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </IconsButton>
              <IconsButton
                onClick={() =>
                  openModal(
                    <IconsButton
                      style={{ height: "18px" }}
                      onClick={() => handleDeleteTitle(todo.id)}
                    >
                      <img src={Icons.Archive} alt="Archive" />
                    </IconsButton>
                  )
                }
                style={{ backgroundColor: "#101204" }}
              >
                <img
                  src={Icons.More}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </IconsButton>
            </StyledDiv>
          </StyledWrap>
          {!collaps && (
            <Styleddescription>
              {description.map((item) => (
                <Styledli key={item.id}>
                  <div style={{ width: "180px", wordWrap: "break-word" }}>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(item.id)}
                      checked={checkedItems[item.id] || false}
                    />
                    <span
                      style={{
                        display: "inline-block",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                        width: "80%",
                      }}
                    >
                      {item.description}
                    </span>
                  </div>
                  <div>
                    {checkedItems[item.id] && (
                      <IconsButton
                        style={{ height: "18px" }}
                        onClick={() =>
                          handleDeleteDescription(todo.id, item.id)
                        }
                      >
                        <img src={Icons.Archive} alt="Archive" />
                      </IconsButton>
                    )}
                    <img src={Icons.Pen} alt="Edit" />
                  </div>
                </Styledli>
              ))}
            </Styleddescription>
          )}

          {!formVisible ? (
            <IconsButton
              onClick={handleClick}
              style={{ backgroundColor: "#101204" }}
            >
              <img src={Icons.Plus} alt="plus" />
              Добавить карточку
            </IconsButton>
          ) : (
            <StyledForm onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder={"Название колонки..."}
                style={{
                  height: "30px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <StyledBtnDiv>
                <StyledButton type="submit">Добавить список</StyledButton>
                <IconsButton
                  onClick={handleCloseForm}
                  style={{ backgroundColor: "#101204" }}
                >
                  <img src={Icons.Close} alt="Close" />
                </IconsButton>
              </StyledBtnDiv>
            </StyledForm>
          )}
        </StyledGlobalDiv>
      )}
    </div>
  );
};

const StyledGlobalDiv = styled.div`
  background-color: #101204;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: width 0.3s ease, height 0.3s ease;
  width: ${(props) => (props.collaps ? "70px" : "250px")};
  writing-mode: ${(props) => (props.collaps ? "vertical-rl" : "horizontal-tb")};
  text-orientation: ${(props) => (props.collaps ? "mixed" : "initial")};
  overflow: hidden;
  padding: 10px 15px;
  border-radius: 10px;
  min-height: 100px;
`;

const StyledWrap = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    color: #9fadbc;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 32px;
  color: #101204;
  background-color: #829bb5;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  &:hover {
    background-color: #829bb5;
  }
`;

const StyledForm = styled.form`
  width: 230px;
  padding: 10px;
  background-color: #101204;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledBtnDiv = styled.div`
  display: flex;
  gap: 5px;
  background-color: #101204;
`;

const Styledli = styled.li`
  width: 100%;
  color: #b6c2cf;
  list-style: none;
  background-color: #1d2125;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
`;

const Styleddescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  input {
    border-radius: 100%;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;
