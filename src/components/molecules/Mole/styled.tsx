import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
  from {
    transform: translateY(60%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ContainerMoleStyled = styled.div`
    background: url("/assets/WAM_Mole.png");
    width: 10rem;
    height: 7.5rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    animation: ${appearAnimation} 1s forwards;
`;

