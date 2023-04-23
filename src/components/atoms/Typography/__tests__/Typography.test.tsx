import { render } from "@testing-library/react";
import "jest-styled-components";
import { Typography } from "../index";

describe("Typography component", () => {
    it("renders with default props", () => {
        const { getByTestId } = render(<Typography>Default text</Typography>);
        const typographyElement = getByTestId("typography");

        expect(typographyElement).toHaveStyle("color: #333");
        expect(typographyElement).toHaveStyle("font-size: 1rem");
        expect(typographyElement).toHaveTextContent("Default text");
        expect(typographyElement).toHaveStyle(
            "text-shadow: -1px -1px #fff,1px -1px #fff,-1px 1px #fff,1px 1px #fff"
        );
    });

    it("renders with primary style type", () => {
        const { getByTestId } = render(
            <Typography styleType='primary'>Primary text</Typography>
        );
        const typographyElement = getByTestId("typography");
        expect(typographyElement).toHaveStyle("color: #000");
        expect(typographyElement).toHaveTextContent("Primary text");
    });

    it("renders with secondary style type", () => {
        const { getByTestId } = render(
            <Typography styleType='secondary'>Secondary text</Typography>
        );
        const typographyElement = getByTestId("typography");

        expect(typographyElement).toHaveStyle("color: #ff4136");
        expect(typographyElement).toHaveTextContent("Secondary text");
    });

    it("renders with tertiary style type", () => {
        const { getByTestId } = render(
            <Typography styleType='tertiary'>Tertiary text</Typography>
        );
        const typographyElement = getByTestId("typography");

        expect(typographyElement).toHaveStyle("color: #0074d9");
        expect(typographyElement).toHaveTextContent("Tertiary text");
    });

    it("renders with text alignment", () => {
        const { getByTestId } = render(
            <Typography textAlign='center'>Centered text</Typography>
        );
        const typographyElement = getByTestId("typography");

        expect(typographyElement).toHaveStyle("text-align: center");
    });
});

