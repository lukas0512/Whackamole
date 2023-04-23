import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { generateActiveHoles } from "./generateActiveHoles";

describe("generateActiveHoles", () => {
    test("generates the expected number of active holes", async () => {
        const setActiveHolesExpiration = jest.fn();
        const activeHolesExpiration = {};
        const numHoles = 12;
        const activeHoles = generateActiveHoles();
        expect(activeHoles.length).toBeGreaterThan(0);
        expect(activeHoles.length).toBeLessThanOrEqual(2);
        for (const hole of activeHoles) {
            expect(hole).toBeGreaterThanOrEqual(0);
            expect(hole).toBeLessThan(numHoles);
            expect(activeHolesExpiration[hole]).toBeGreaterThan(Date.now());
        }
        await waitFor(() => {
            expect(setActiveHolesExpiration).toHaveBeenCalledTimes(
                activeHoles.length
            );
        });
    });
});

