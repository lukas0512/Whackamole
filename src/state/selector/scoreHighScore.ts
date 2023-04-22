import { selector } from "recoil";
import { currentScoreState, scoreState } from "../atoms/generalState";

export const highestScoreState = selector({
    key: "highestScoreState",
    get: ({ get }) => {
        const scores = get(scoreState);
        const highestScores = scores
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
        return highestScores;
    },
});

export const currentRankState = selector({
    key: "currentRankState",
    get: ({ get }) => {
        const scores = get(scoreState);
        const currentScore = get(currentScoreState);
        const sortedScores = scores.sort((a, b) => b.score - a.score);
        const rank = sortedScores.findIndex(
            (score) => score.score <= currentScore
        );
        return rank >= 0 ? rank + 1 : null;
    },
});

