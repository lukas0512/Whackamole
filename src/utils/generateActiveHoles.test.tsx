import { generateActiveHoles } from "./generateActiveHoles";

describe("generateActiveHoles function", () => {
    it("should remove expired holes and keep active ones", () => {
        const activeHoles = [1, 2, 3];
        const setActiveHoles = jest.fn();
        const activeHolesExpiration = {
            1: Date.now() - 100,
            2: Date.now() + 1000,
        };
        const setActiveHolesExpiration = jest.fn();

        generateActiveHoles(
            activeHoles,
            setActiveHoles,
            activeHolesExpiration,
            setActiveHolesExpiration
        );

        expect(setActiveHoles).toHaveBeenCalledWith([2, 3]);
        expect(setActiveHolesExpiration).toHaveBeenCalledWith({
            1: 0,
            2: activeHolesExpiration[2],
        });
    });

    it("should add new active holes", () => {
        const activeHoles = [1, 2, 3];
        const setActiveHoles = jest.fn();
        const activeHolesExpiration = {
            1: Date.now() - 100,
            2: Date.now() + 1000,
        };
        const setActiveHolesExpiration = jest.fn();

        generateActiveHoles(
            activeHoles,
            setActiveHoles,
            activeHolesExpiration,
            setActiveHolesExpiration
        );

        expect(setActiveHoles).toHaveBeenCalledWith(
            expect.arrayContaining([expect.any(Number)])
        );
    });
});

