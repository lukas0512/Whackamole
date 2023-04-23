import React from "react";
import { act, render, screen } from "@testing-library/react";
import { ModalHighScores } from "../index";
import { RecoilRoot } from "recoil";

describe("ModalHighScores", () => {
    it("should render high scores modal with scores list", () => {
        const scores = [
            { name: "Player 1", score: 100 },
            { name: "Player 5", score: 60 },
            { name: "Player 7", score: 40 },
        ];
        act(() => {
            render(
                <RecoilRoot>
                    <ModalHighScores isOpen={true} onClose={jest.fn()} />
                </RecoilRoot>
            );
        });
        expect(screen.getByText("High Scores")).toBeInTheDocument();
        scores.forEach((s) => {
            expect(screen.getByText(s.name)).toBeInTheDocument();
            expect(screen.getByText(s.score)).toBeInTheDocument();
        });
    });

    it('should close modal and reset game state when "Play Again" button is clicked', () => {
        const onClose = jest.fn();
        const setState = jest.fn();
        act(() => {
            render(
                <RecoilRoot>
                    <ModalHighScores isOpen={true} onClose={onClose} />
                </RecoilRoot>
            );
        });
        const playAgainButton = screen.getByText("Play Again");
        expect(playAgainButton).toBeInTheDocument();
        act(() => {
            playAgainButton.click();
        });
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});

