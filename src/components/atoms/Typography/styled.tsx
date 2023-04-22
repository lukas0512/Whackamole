import styled, { css } from "styled-components";

function verifySize(size: "h1" | "h2" | "h3" | "h4") {
    switch (size) {
        case "h1":
            return "2.5rem";
        case "h2":
            return "2.0rem";
        case "h3":
            return "1.5rem";
        case "h4":
            return "1rem";
    }
}
interface TypographyStyledProps {
    size: "h1" | "h2" | "h3" | "h4";
    textColor?: string;
    textAlign?: string;
    styleType?: "primary" | "secondary" | "tertiary";
}

export const TypographyStyled = styled.p<TypographyStyledProps>`
    color: #333;
    font-size: ${({ size }) => verifySize(size)};
    text-align: ${({ textAlign }) => textAlign};

    ${({ styleType }) =>
        styleType === "primary" &&
        css`
            color: #000;
            text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff,
                1px 1px #fff;
        `}

    ${({ styleType }) =>
        styleType === "secondary" &&
        css`
            color: #ff4136;
            text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff,
                1px 1px #fff;
        `}

    ${({ styleType }) =>
        styleType === "tertiary" &&
        css`
            color: #0074d9;
            text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff,
                1px 1px #fff;
        `}
`;

