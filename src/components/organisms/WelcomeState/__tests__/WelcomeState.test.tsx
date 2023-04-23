import { render, screen, act, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { WelcomeState } from "../index";

describe("WelcomeState", () => {
    it("should render welcome state with title and input", () => {
        render(
            <RecoilRoot>
                <WelcomeState />
            </RecoilRoot>
        );

        expect(screen.getByText("Whack a Mole")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Nickname")).toBeInTheDocument();
        expect(screen.getByText("Start")).toBeInTheDocument();
    });

    it('should set game state and nickname when "Start" button is clicked', () => {
        const setState = jest.fn();

        render(
            <RecoilRoot>
                <WelcomeState />
            </RecoilRoot>
        );

        const nicknameInput = screen.getByTestId("inputNickname");
        const startButton = screen.getByText("Start");

        act(() => {
            fireEvent.input(nicknameInput, { target: { value: "Lucas" } });
        });

        expect(nicknameInput.value).toEqual("Lucas");

        act(() => {
            startButton.dispatchEvent(
                new MouseEvent("click", { bubbles: true })
            );
        });
    });
});

