import { Hole } from "../../atoms/Hole";
import { ContainerMoleStyled } from "./styled";

interface PropsMole {
    active?: boolean;
    number: number;
    onWhack?: () => void;
}

export const Mole = ({ active, onWhack }: PropsMole) => {
    return (
        <Hole data-testid='moleContainer'>
            {active && (
                <ContainerMoleStyled data-testid='mole' onClick={onWhack} />
            )}
        </Hole>
    );
};

