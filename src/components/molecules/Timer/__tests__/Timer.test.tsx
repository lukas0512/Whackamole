import React from "react";
import { act, render } from "@testing-library/react";
import { Timer } from "../index";

describe("<Timer />", () => {
    jest.useFakeTimers();

    it("should render with correct initial time", () => {
        const timeInSeconds = 60;
        const { getByText } = render(<Timer timeInSeconds={timeInSeconds} />);
        const timerElement = getByText(/1:00/i);
        expect(timerElement).toBeInTheDocument();
    });

    it("should count down time correctly", () => {
        const timeInSeconds = 60;
        const { getByText } = render(<Timer timeInSeconds={timeInSeconds} />);
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        const timerElement = getByText(/0:59/i);
        expect(timerElement).toBeInTheDocument();
    });

    it("should call onEnd function when timer reaches 0", () => {
        const timeInSeconds = 3;
        const onEnd = jest.fn();
        const { getByTestId } = render(
            <Timer timeInSeconds={timeInSeconds} onEnd={onEnd} />
        );

        act(() => {
            jest.advanceTimersByTime(timeInSeconds * 1000); // move forward to the end of the timer
        });

        const timerElement = getByTestId("timer");
        expect(timerElement).toHaveTextContent("0:00");
        expect(onEnd).toHaveBeenCalled();
    });

    it("should change style to secondary when time is less than 10 seconds", () => {
        const timeInSeconds = 12;
        const { getByText } = render(<Timer timeInSeconds={timeInSeconds} />);
        expect(getByText(/0:12/i)).toHaveStyle({ color: "#000" });
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(getByText(/0:10/i)).toHaveStyle({ color: "rgb(255, 65, 54)" });
        act(() => {
            jest.advanceTimersByTime(5000);
        });
        expect(getByText(/0:05/i)).toHaveStyle({ color: "rgb(255, 65, 54)" });
    });
});

