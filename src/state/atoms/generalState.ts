import { generateActiveHoles } from "@src/utils/generateActiveHoles";
import { atom } from "recoil";

export const generalState = atom({
    key: "general",
    default: {
        inGame: false,
        score: 0,
        nickName: "",
    },
});

type ActiveHole = { id: number; expiration: number };
type ActiveHoles = ActiveHole[];

export const activeHolesState = atom<ActiveHoles>({
    key: "activeHolesState",
    default: [],
});

interface Score {
    name: string;
    score: number;
}

export const highScoresState = atom<Score[]>({
    key: "highScoresState",
    default: [
        { name: "Player 1", score: 100 },
        { name: "Player 2", score: 90 },
        { name: "Player 3", score: 80 },
        { name: "Player 4", score: 70 },
        { name: "Player 5", score: 60 },
        { name: "Player 6", score: 50 },
        { name: "Player 7", score: 40 },
        { name: "Player 8", score: 30 },
        { name: "Player 9", score: 20 },
        { name: "Player 10", score: 10 },
    ],
});

