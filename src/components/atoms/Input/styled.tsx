import styled from "styled-components";

export const GameInput = styled.input`
    background-color: #fff;
    border: 2px solid #e69119;
    border-radius: 8px;
    color: #555;
    font-size: 24px;
    padding: 16px;
    margin: 8px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: #ffd464;
        box-shadow: 0 0 2px 2px #e69119;
    }

    &::placeholder {
        color: #bbb;
    }
`;

