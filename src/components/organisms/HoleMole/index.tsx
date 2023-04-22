import { Mole } from "@components/molecules/Mole";
import { activeHolesState } from "@src/state/atoms/generalState";
import { generateActiveHoles } from "@src/utils/generateActiveHoles";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { HolesContainerStyled } from "./styled";

export const HoleMole = () => {
    const [activeHoles, setActiveHoles] = useRecoilState(activeHolesState);
    const [activeHolesExpiration, setActiveHolesExpiration] = useState<{
        [key: number]: number;
    }>({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newActiveHoles = generateActiveHoles(
                activeHoles,
                setActiveHoles,
                activeHolesExpiration,
                setActiveHolesExpiration
            );
            setActiveHoles(newActiveHoles);
        }, 1500);

        return () => clearInterval(intervalId);
    }, [activeHoles, setActiveHoles, activeHolesExpiration]);

    return (
        <HolesContainerStyled>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <Mole
                    key={item}
                    active={activeHoles.includes(item)}
                    number={item}
                />
            ))}
        </HolesContainerStyled>
    );
};

