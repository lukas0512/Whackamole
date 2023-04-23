import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import { Input } from "../index";

describe("Input", () => {
    it("renders correctly with default props", () => {
        render(<Input />);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toHaveStyleRule("background-color", "#fff");
        expect(inputElement).toHaveStyleRule("border", "2px solid #e69119");
        expect(inputElement).toHaveStyleRule("border-radius", "8px");
        expect(inputElement).toHaveStyleRule("color", "#555");
        expect(inputElement).toHaveStyleRule("font-size", "24px");
        expect(inputElement).toHaveStyleRule("padding", "16px");
        expect(inputElement).toHaveStyleRule("margin", "8px");
        expect(inputElement).toHaveStyleRule("width", "100%");
        expect(inputElement).toHaveStyleRule("box-sizing", "border-box");
        expect(inputElement).toHaveStyleRule(
            "transition",
            "border-color 0.2s ease-in-out"
        );
    });
});

