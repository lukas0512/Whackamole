import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { HoleMole } from "../index";

describe("HoleMole", () => {
    it("should render Mole component for each hole", () => {
        const { getAllByTestId } = render(
            <RecoilRoot>
                <HoleMole />
            </RecoilRoot>
        );
        expect(getAllByTestId("moleContainer")).toHaveLength(12);
    });
});

