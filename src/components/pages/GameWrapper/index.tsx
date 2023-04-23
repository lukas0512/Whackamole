import { Score } from "@components/molecules/Score";
import { Timer } from "@components/molecules/Timer";
import { HoleMole } from "@components/organisms/HoleMole";
import { ModalHighScores } from "@components/organisms/ModalHighScores";
import { WelcomeState } from "@components/organisms/WelcomeState";
import HammerCursor from "@components/templates/HammerCursor";
import { TIME_LIMIT } from "@src/constants";
import { generalState, highScoresState } from "@src/state/atoms/generalState";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import {
    ContainerHoleMole,
    ContainerInformations,
    ContainerInGame,
} from "./styled";

export const GameWrapper = () => {
    const [state, setState] = useRecoilState(generalState);
    const [showHighScores, setShowHighScores] = useState(false);
    const [highScores, setHighScores] = useRecoilState(highScoresState);

    const onTimerEnd = useCallback(() => {
        setHighScores(
            [...highScores, { name: state.nickName, score: state.score }]
                .sort((a, b) => b.score - a.score)
                .slice(0, 10)
        );
        setShowHighScores(true);
    }, [state.nickName, state.score, setHighScores]);

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

