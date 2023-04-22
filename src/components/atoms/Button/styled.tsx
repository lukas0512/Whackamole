import styled from "styled-components";

export const ButtonStyled = styled.button`
    background: var(--control);
    color: var(--color);
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 4px solid var(--color);
    font-size: 1.5rem;
    width: 100%;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 0px var(--color);
    }

    &:active {
        transform: translateY(0px);
        box-shadow: none;
        border-color: var(--control);
        background-color: var(--color);
        color: var(--control);
    }
`;

