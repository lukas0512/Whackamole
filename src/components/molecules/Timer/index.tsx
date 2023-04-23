import { Typography } from "@components/atoms/Typography";
import { useEffect, useRef, useState } from "react";

interface PropsTimer {
    timeInSeconds: number;
    interval?: number;
    onEnd?: () => void;
}
export const Timer = ({
    timeInSeconds,
    interval = 1000,
    onEnd,
}: PropsTimer) => {
    const [internalTimeInSeconds, setInternalTimeInSeconds] =
        useState<number>(timeInSeconds);
    const timerRef = useRef<number>(timeInSeconds);

    useEffect(() => {
        if (internalTimeInSeconds === 0 && onEnd) {
            clearInterval(timerRef.current);
            onEnd();
        }
    }, [internalTimeInSeconds, onEnd]);

    useEffect(() => {
        timerRef.current = window.setInterval(
            () =>
                setInternalTimeInSeconds(
                    (prevInternalTime) => prevInternalTime - interval / 1000
                ),
            interval
        );
        return () => {
            clearInterval(timerRef.current);
        };
    }, [interval]);

    const minutes = Math.floor(internalTimeInSeconds / 60);
    const seconds = Math.floor(internalTimeInSeconds % 60);

    return (
        <Typography
            size='h1'
            textAlign='start'
            styleType={minutes === 0 && seconds <= 10 ? "secondary" : "primary"}
            data-testid='timer'
        >
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Typography>
    );
};

