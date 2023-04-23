import { Mole } from "@components/molecules/Mole";
import { HOLES_COUNT, MOLE_SCORE } from "@src/constants";
import { activeHolesState, generalState } from "@src/state/atoms/generalState";
import { generateActiveHoles } from "@src/utils/generateActiveHoles";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { HolesContainerStyled } from "./styled";

export const HoleMole = () => {
    const [state, setState] = useRecoilState(generalState);
    const [activeHoles, setActiveHoles] = useRecoilState(activeHolesState);

    const onWhack = (id: number) => {
        const randomScore = Math.floor(Math.random() * 31) + 5;
        setState({ ...state, score: state.score + MOLE_SCORE + randomScore });
        setActiveHoles(activeHoles.filter((hole) => hole.id !== id));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newActiveHoles = generateActiveHoles(activeHoles, 2);
            setActiveHoles(newActiveHoles);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [activeHoles, setActiveHoles]);

    return (
        <HolesContainerStyled>
            {[...Array(HOLES_COUNT)].map((item, index) => (
                <Mole
                    key={`mole-${index}`}
                    active={activeHoles.some((hole) => hole.id === index)}
                    onWhack={() => onWhack(index)}
                />
            ))}
        </HolesContainerStyled>
    );
};

