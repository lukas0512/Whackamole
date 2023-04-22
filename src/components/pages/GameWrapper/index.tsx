import { Score } from "@components/molecules/Score";
import { Timer } from "@components/molecules/Timer";
import { HoleMole } from "@components/organisms/HoleMole";
import { ModalHighScores } from "@components/organisms/ModalHighScores";
import { WelcomeState } from "@components/organisms/WelcomeState";
import HammerCursor from "@components/templates/HammerCursor";
import { TIME_LIMIT } from "@src/constants";
import { generalState } from "@src/state/atoms/generalState";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
    ContainerHoleMole,
    ContainerInformations,
    ContainerInGame,
} from "./styled";

export const GameWrapper = () => {
    const [state, setState] = useRecoilState(generalState);
    const [showHighScores, setShowHighScores] = useState(false);
    const onTimerEnd = () => setShowHighScores(true);

    return state.inGame ? (
        <ContainerInGame>
            <HammerCursor hammerImage='/assets/WAM_Hammer.png' />
            <ContainerInformations>
                <Score />
            </ContainerInformations>
            <ContainerHoleMole>
                <Timer timeInSeconds={TIME_LIMIT} onEnd={onTimerEnd} />
                <HoleMole />
            </ContainerHoleMole>
            <ModalHighScores
                isOpen={showHighScores}
                onClose={() => setShowHighScores(false)}
            />
        </ContainerInGame>
    ) : (
        <WelcomeState />
    );
};

