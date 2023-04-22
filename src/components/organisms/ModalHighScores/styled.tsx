import styled, { keyframes } from "styled-components";

interface ModalProps {
    isOpen: boolean;
}

interface RankItemProps {
    isCurrentPlayer: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div<ModalProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalWrapper = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    width: 500px;
    max-width: 100%;
`;

export const ScoreTitle = styled.h2`
    margin-top: 0;
    color: var(--control);
`;

export const ScoreList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const RankItem = styled.li<RankItemProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin: 8px 0;
    background-color: ${({ isCurrentPlayer }) =>
        isCurrentPlayer ? "#ffd464" : "transparent"};
    color: ${({ isCurrentPlayer }) => (isCurrentPlayer ? "#333" : "#555")};
    border-radius: 4px;
`;

export const RankPosition = styled.span`
    font-weight: bold;
    margin-right: 8px;
`;

export const RankName = styled.span`
    flex-grow: 1;
    margin-right: 8px;
`;

export const RankScore = styled.span``;

