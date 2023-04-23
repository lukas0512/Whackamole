import { Button } from "@components/atoms/Button";
import { generalState, highScoresState } from "@src/state/atoms/generalState";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    ModalOverlay,
    ModalWrapper,
    ScoreTitle,
    ScoreList,
    RankItem,
    RankPosition,
    RankName,
    RankScore,
} from "./styled";

interface HighScoreModalProps {
    isOpen: boolean;
    onClose?: () => void;
}

export const ModalHighScores = ({ isOpen, onClose }: HighScoreModalProps) => {
    const [state, setState] = useRecoilState(generalState);
    const scores = useRecoilValue(highScoresState);

    const renderRankItem = (
        rank: number,
        name: string,
        score: number,
        isCurrentPlayer: boolean
    ) => {
        return (
            <RankItem key={rank} rank={rank} isCurrentPlayer={isCurrentPlayer}>
                <RankPosition>{rank}.</RankPosition>
                <RankName>{name}</RankName>
                <RankScore>{score}</RankScore>
            </RankItem>
        );
    };

    return (
        <ModalOverlay isOpen={isOpen}>
            <ModalWrapper>
                <ScoreTitle>High Scores</ScoreTitle>
                <ScoreList>
                    {scores.map(({ name, score }, index) => {
                        const rank = index + 1;
                        const isCurrentPlayer =
                            name === state.nickName && score === state.score;

                        return renderRankItem(
                            rank,
                            name,
                            score,
                            isCurrentPlayer
                        );
                    })}
                </ScoreList>
                <Button
                    onClick={() => {
                        onClose?.();
                        setState({ ...state, inGame: false, nickName: "" });
                    }}
                >
                    Play Again
                </Button>
            </ModalWrapper>
        </ModalOverlay>
    );
};

