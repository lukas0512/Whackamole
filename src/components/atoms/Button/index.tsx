import { ButtonStyled } from "./styled";

export const Button = ({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

