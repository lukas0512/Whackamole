import { atom, selector } from "recoil";

export const generalState = atom({
    key: "general",
    default: {
        inGame: false,
        score: 0,
        nickName: "",
    },
});

export const activeHolesState = atom<number[]>({
    key: "activeHolesState",
    default: [],
});

interface Score {
    name: string;
    score: number;
}

export const scoreState = atom<Score[]>({
    key: "scoreState",
    default: [],
});

export const currentScoreState = atom<number>({
    key: "currentScoreState",
    default: 0,
});

