import { TypographyStyled } from "./styled";

interface PropsTypography {
    children: React.ReactNode;
    size: "h1" | "h2" | "h3" | "h4";
    color?: string;
    textAlign?: string;
    styleType?: "primary" | "secondary" | "tertiary";
}
export const Typography = ({
    children,
    size,
    color,
    textAlign,
    styleType,
}: PropsTypography) => {
    return (
        <TypographyStyled
            as={size}
            size={size}
            textColor={color}
            textAlign={textAlign}
            styleType={styleType}
        >
            {children}
        </TypographyStyled>
    );
};

