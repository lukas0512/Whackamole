import { Button } from "@components/atoms/Button";
import { generalState } from "@src/state/atoms/generalState";
import { useRecoilState } from "recoil";
import {
    ModalOverlay,
    ModalWrapper,
    RankItem,
    RankName,
    RankPosition,
    RankScore,
    ScoreList,
    ScoreTitle,
} from "./styled";

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
}

export const ModalHighScores = ({ isOpen, onClose }: ModalProps) => {
    const [state, setState] = useRecoilState(generalState);
    const scores = [
        { name: state.nickName, score: state.score },
        { name: "Player 2", score: 50 },
        { name: "Player 3", score: 25 },
        { name: "Player 4", score: 10 },
        { name: "Player 5", score: 5 },
        { name: "Player 6", score: 3 },
        { name: "Player 7", score: 2 },
        { name: "Player 8", score: 1 },
    ];

    const currentPlayerPosition = 1;

    return (
        <ModalOverlay isOpen={isOpen}>
            <ModalWrapper>
                <ScoreTitle>
                    Your Score: <b>{state.score}</b>
                </ScoreTitle>
                <ScoreList>
                    {scores.map((item, index) => (
                        <RankItem
                            key={index}
                            isCurrentPlayer={
                                index === currentPlayerPosition - 1
                            }
                        >
                            <RankPosition>{index + 1}.</RankPosition>
                            <RankName>{item.name}</RankName>
                            <RankScore>{item.score}</RankScore>
                        </RankItem>
                    ))}
                </ScoreList>
                <Button
                    onClick={() => {
                        onClose?.();
                        setState({ ...state, inGame: false });
                    }}
                >
                    Play Again
                </Button>
            </ModalWrapper>
        </ModalOverlay>
    );
};

