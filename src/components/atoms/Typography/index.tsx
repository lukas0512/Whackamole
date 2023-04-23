import { TypographyStyled } from "./styled";

interface PropsTypography {
    children: React.ReactNode;
    size?: "h1" | "h2" | "h3" | "h4";
    textAlign?: string;
    styleType?: "primary" | "secondary" | "tertiary";
}
export const Typography = ({
    children,
    size = "h4",
    textAlign,
    styleType,
    ...props
}: PropsTypography) => {
    return (
        <TypographyStyled
            as={size}
            size={size}
            textAlign={textAlign}
            styleType={styleType}
            data-testid='typography'
            {...props}
        >
            {children}
        </TypographyStyled>
    );
};

