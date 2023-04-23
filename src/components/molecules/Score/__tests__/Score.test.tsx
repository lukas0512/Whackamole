import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Score } from "../index";

describe("Score", () => {
    it("should render score container", () => {
        render(
            <RecoilRoot>
                <Score />
            </RecoilRoot>
        );
        const scoreContainer = screen.getByTestId("score-container");
        expect(scoreContainer).toBeInTheDocument();
    });

    it("should render score title", () => {
        render(
            <RecoilRoot>
                <Score />
            </RecoilRoot>
        );
        const scoreTitle = screen.getByText("Score");
        expect(scoreTitle).toBeInTheDocument();
    });

    it("should render score value", () => {
        render(
            <RecoilRoot>
                <Score />
            </RecoilRoot>
        );
        const scoreValue = screen.getByTestId("score-value");
        expect(scoreValue).toBeInTheDocument();
    });

    it("should render the initial score value as 0", () => {
        render(
            <RecoilRoot>
                <Score />
            </RecoilRoot>
        );
        const scoreValue = screen.getByTestId("score-value");
        expect(scoreValue).toHaveTextContent("0");
    });
});

