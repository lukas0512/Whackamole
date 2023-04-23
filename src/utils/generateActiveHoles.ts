type ActiveHole = { id: number; expiration: number };
type ActiveHoles = ActiveHole[];

export function generateActiveHoles(
    activeHoles: ActiveHoles,
    numActiveHoles: number
): ActiveHoles {
    const now = Date.now();
    const activeHolesExpiration = activeHoles.reduce<{ [key: number]: number }>(
        (acc, hole) => {
            acc[hole.id] = hole.expiration;
            return acc;
        },
        {}
    );

    const activeHolesList = [];
    for (let i = 0; i < 12; i++) {
        if (activeHolesExpiration[i] && activeHolesExpiration[i] > now) {
            activeHolesList.push({
                id: i,
                expiration: activeHolesExpiration[i],
            });
        }
    }

    const newActiveHolesList: { id: number; expiration: number }[] = [];
    while (newActiveHolesList.length < numActiveHoles) {
        const randomHole = Math.floor(Math.random() * 12);
        if (!newActiveHolesList.some((hole) => hole.id === randomHole)) {
            newActiveHolesList.push({ id: randomHole, expiration: 0 });
        }
    }

    const duration = 1500 / numActiveHoles;
    const updatedActiveHolesList = newActiveHolesList.map((hole, index) => {
        const remainingHoles = newActiveHolesList.length - index;
        const remainingDuration = duration * remainingHoles;
        const randomOffset = Math.random() * remainingDuration;
        const expiration = now + duration * index + randomOffset;
        return { ...hole, expiration };
    });

    updatedActiveHolesList.sort((a, b) => a.expiration - b.expiration);
    const newActiveHoles = updatedActiveHolesList.slice(0, numActiveHoles);

    return newActiveHoles;
}

