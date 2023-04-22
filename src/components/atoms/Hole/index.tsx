import { ContainerHoleStyled } from "./styled";

interface PropsHole {
    children?: React.ReactNode;
}

export const Hole = ({ children }: PropsHole) => {
    return <ContainerHoleStyled>{children}</ContainerHoleStyled>;
};

