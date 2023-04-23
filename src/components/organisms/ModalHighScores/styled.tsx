import styled, { keyframes } from "styled-components";

interface ModalProps {
    isOpen: boolean;
}

interface RankItemProps {
    isCurrentPlayer: boolean;
    rank: number;
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
    background-color: #3c3c3c;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ScoreTitle = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    color: #e69119;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff, 1px 1px #fff;
    letter-spacing: 0.2rem;
`;

export const ScoreList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const RankItem = styled.li<RankItemProps>`
    display: flex;
    color: ${(props) => (props.isCurrentPlayer ? "#e69119" : "#d3d3d3")};
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    position: relative;
    font-size: ${(props) => {
        switch (props.rank) {
            case 1:
                return "1.5rem";
            case 2:
                return "1.25rem";
            case 3:
                return "1.0rem";
            default:
                return "0.8rem";
        }
    }};

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: ${(props) =>
            props.isCurrentPlayer ? "#e69119" : "transparent"};
        opacity: ${(props) => (props.isCurrentPlayer ? 0.3 : 1)};
        z-index: 3;
    }
`;

export const RankPosition = styled.span`
    font-weight: bold;
`;

export const RankName = styled.span`
    flex: 1;
    margin: 0 20px;
`;

export const RankScore = styled.span`
    font-weight: bold;
`;

