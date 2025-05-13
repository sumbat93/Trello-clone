import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent &&
        ReactDOM.createPortal(
          <Backdrop onClick={closeModal}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
              {modalContent}
            </ModalWrapper>
          </Backdrop>,
          document.getElementById("modal-root")
        )}
    </ModalContext.Provider>
  );
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalWrapper = styled.div`
  background-color: #1d2125;
  padding: 24px;
  border-radius: 10px;
  min-width: 320px;
  max-width: 90vw;
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;
