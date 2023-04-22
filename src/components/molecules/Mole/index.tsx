import { MOLE_SCORE } from "@src/constants";
import { activeHolesState, generalState } from "@src/state/atoms/generalState";
import { useRecoilState } from "recoil";
import { Hole } from "../../atoms/Hole";
import { ContainerMoleStyled } from "./styled";

interface PropsMole {
    active?: boolean;
    number: number;
}

export const Mole = ({ active, number }: PropsMole) => {
    const [state, setState] = useRecoilState(generalState);
    const [activeHoles, setActiveHoles] = useRecoilState(activeHolesState);

    const onWhack = (points: number) => {
        setState({ ...state, score: state.score + points });
        setActiveHoles(activeHoles.filter((holeIndex) => holeIndex !== number));
    };
    return (
        <Hole>
            {active && (
                <ContainerMoleStyled onClick={() => onWhack(MOLE_SCORE)} />
            )}
        </Hole>
    );
};

