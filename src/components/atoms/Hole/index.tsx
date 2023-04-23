import { ContainerHoleStyled } from "./styled";

interface PropsHole {
    children?: React.ReactNode;
}

export const Hole = ({ children, ...props }: PropsHole) => {
    return <ContainerHoleStyled {...props}>{children}</ContainerHoleStyled>;
};

