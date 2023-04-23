import { render, screen, fireEvent } from "@testing-library/react";
import { Mole } from "../index";

describe("Mole", () => {
    it("should render inactive mole", () => {
        render(<Mole number={1} />);
        const mole = screen.queryByTestId("mole");
        expect(mole).not.toBeInTheDocument();
    });

    it("should render active mole", () => {
        const onWhack = jest.fn();
        render(<Mole active number={1} onWhack={onWhack} />);
        const mole = screen.getByTestId("mole");
        fireEvent.click(mole);
        expect(onWhack).toHaveBeenCalled();
    });
});

