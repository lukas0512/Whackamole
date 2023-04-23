type ActiveHoles = number[];

export function generateActiveHoles(
    activeHoles: ActiveHoles,
    setActiveHoles: (value: ActiveHoles) => void,
    activeHolesExpiration: { [key: number]: number },
    setActiveHolesExpiration: (value: { [key: number]: number }) => void
): ActiveHoles {
    const newActiveHoles = [];

    const now = Date.now();
    for (const [hole, expiration] of Object.entries(activeHolesExpiration)) {
        if (expiration <= now) {
            setActiveHolesExpiration({ ...activeHolesExpiration, [hole]: 0 });
            setActiveHoles(
                activeHoles.filter((activeHole) => activeHole !== Number(hole))
            );
        }
    }

    for (const activeHole of activeHoles) {
        if (
            activeHolesExpiration[activeHole] &&
            activeHolesExpiration[activeHole] > now
        ) {
            newActiveHoles.push(activeHole);
        } else {
            setActiveHolesExpiration({
                ...activeHolesExpiration,
                [activeHole]: 0,
            });
            setActiveHoles(activeHoles.filter((hole) => hole !== activeHole));
        }
    }

    const numActiveHoles = Math.floor(Math.random() * 2) + 1;

    while (newActiveHoles.length < numActiveHoles) {
        const randomHole = Math.floor(Math.random() * 12);
        if (!newActiveHoles.includes(randomHole)) {
            const activeTime = Math.random() * 1.5 + 1;
            setActiveHolesExpiration({
                ...activeHolesExpiration,
                [randomHole]: now + activeTime,
            });
            newActiveHoles.push(randomHole);
        }
    }

    setActiveHoles(newActiveHoles);
    return newActiveHoles;
}

