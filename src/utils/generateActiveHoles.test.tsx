import { generateActiveHoles } from "./generateActiveHoles";

describe("generateActiveHoles", () => {
    const activeHoles = [
        { id: 0, expiration: Date.now() + 500 },
        { id: 1, expiration: Date.now() + 1000 },
        { id: 2, expiration: Date.now() + 1500 },
    ];

    it("should return an array with the length of numActiveHoles", () => {
        const numActiveHoles = 4;
        const newActiveHoles = generateActiveHoles(activeHoles, numActiveHoles);
        expect(newActiveHoles.length).toBe(numActiveHoles);
    });

    it("should not contain duplicate holes", () => {
        const numActiveHoles = 3;
        const newActiveHoles = generateActiveHoles(activeHoles, numActiveHoles);
        const holeIds = newActiveHoles.map((hole) => hole.id);
        const uniqueHoleIds = new Set(holeIds);
        expect(holeIds.length).toBe(uniqueHoleIds.size);
    });

    it("should return an array with unique holes", () => {
        const numActiveHoles = 3;
        const newActiveHoles = generateActiveHoles(activeHoles, numActiveHoles);
        const holeIds = newActiveHoles.map((hole) => hole.id);
        const uniqueHoleIds = new Set(holeIds);
        expect(uniqueHoleIds.size).toBe(numActiveHoles);
    });
});

