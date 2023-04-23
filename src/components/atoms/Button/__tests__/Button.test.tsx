import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../index";

describe("Button", () => {
    test("renders button text", () => {
        const { getByText } = render(<Button>Click me!</Button>);
        const button = getByText(/Click me!/i);
        expect(button).toBeInTheDocument();
    });

    test("calls onClick prop when clicked", () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Button onClick={handleClick}>Click me!</Button>
        );
        const button = getByText(/Click me!/i);
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

