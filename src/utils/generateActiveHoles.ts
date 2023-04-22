type ActiveHoles = number[];

export function generateActiveHoles(
    activeHoles: ActiveHoles,
    setActiveHoles: (value: ActiveHoles) => void,
    activeHolesExpiration: { [key: number]: number },
    setActiveHolesExpiration: (value: { [key: number]: number }) => void
): ActiveHoles {
    const newActiveHoles = [];

    // remove topeiras antigas que já passaram do tempo de expiração
    const now = Date.now();
    for (const [hole, expiration] of Object.entries(activeHolesExpiration)) {
        if (expiration <= now) {
            setActiveHolesExpiration({ ...activeHolesExpiration, [hole]: 0 });
            setActiveHoles(
                activeHoles.filter((activeHole) => activeHole !== Number(hole))
            );
        }
    }

    // percorre todos os buracos ativos
    for (const activeHole of activeHoles) {
        // verifica se o buraco deve continuar ativo
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

    // gera número aleatório de topeiras ativas entre 1 e 2
    const numActiveHoles = Math.floor(Math.random() * 2) + 1;

    // adiciona novas topeiras ativas
    while (newActiveHoles.length < numActiveHoles) {
        const randomHole = Math.floor(Math.random() * 12);
        // verifica se o buraco já está ativo
        if (!newActiveHoles.includes(randomHole)) {
            const activeTime = Math.random() * 1.5 + 1; // define tempo aleatório entre 2 e 3.5 segundos
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

