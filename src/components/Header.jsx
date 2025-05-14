import React from "react";
import styled from "styled-components";
import { Icons } from "../assets/icons";
import { IconsButton } from "./Ui/IconsButton";
import { Input } from "./Ui/Input";
import { useModal } from "../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/Slice/authSlice";

export const Header = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };
  return (
    <StyledHeader>
      <LeftNav>
        <IconsButton onClick={() => openModal()}>
          <StyledImg src={Icons.BurgerMenu} alt="Меню" />
        </IconsButton>
        <IconsButton>
          <div style={{ backgroundColor: "#9fadbc", borderRadius: "3px" }}>
            <img src={Icons.kanban2} alt="" />
          </div>
          Trello
          <img src={Icons.StatMinus} alt="Trello" />
        </IconsButton>
        <IconsButton>
          Рабочие пространство
          <img src={Icons.StatMinus} alt="Рабочие пространство" />
        </IconsButton>
        <IconsButton>
          Недавние
          <img src={Icons.StatMinus} alt="Недавние" />
        </IconsButton>
        <IconsButton>
          В избранном
          <img src={Icons.StatMinus} alt="В избранном" />
        </IconsButton>
        <IconsButton>
          Шаблоны
          <img src={Icons.StatMinus} alt="Шаблоны" />
        </IconsButton>
        <StyledButton>Создать</StyledButton>
      </LeftNav>
      <RightNav>
        <IconsButton
          style={{
            backgroundColor: "#11ac59",
            color: "#1d2125",
            height: "30px",
          }}
        >
          <img src={Icons.Stars} alt="" />
          Осталось дней: 7
        </IconsButton>
        <IconsButton
          style={{
            backgroundColor: "#11ac59",
            color: "#1d2125",
            height: "30px",
          }}
        >
          Бета-версия
          <img src={Icons.StatMinusBlack} alt="" />
        </IconsButton>
        <Input
          style={{ with: "180px", height: "30px" }}
          icon={<img src={Icons.Search} alt="search" />}
          placeholder="Поиск"
        />
        <StyledEndDiv>
          <img src={Icons.Bell} alt="Уведомление" />
          <img src={Icons.Help} alt="Тех. Помощь" />
          <IconsButton
            onClick={() =>
              openModal(
                <IconsButton onClick={handleLogout}>Обратно</IconsButton>
              )
            }
          >
            <img src={Icons.Person} alt="Аккаунт" />
          </IconsButton>
        </StyledEndDiv>
      </RightNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #1d2125;
  position: fixed;
`;

const LeftNav = styled.nav`
  display: flex;
  align-items: center;
`;

const RightNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledButton = styled.button`
  width: 80px;
  height: 32px;
  color: black;
  background-color: #27b023;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  &:hover {
    background-color: #268b51;
  }
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledEndDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
