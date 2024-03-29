import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { useTimersContext, type Timer as TimerProps } from "../store/timers-context";

export default function Timer({ name, duration }: TimerProps) {
    // khởi đầu là null nhưng sẽ nhận giá trị type number
    const interval = useRef<number | null>(null);
    const [remainingTime, setRemaingTime] = useState(duration * 1000);
    const { isRunning } = useTimersContext();

    if (remainingTime <= 0 && interval.current) {
        clearInterval(interval.current);
    }

    useEffect(() => {
        let timer: number;
        if (isRunning) {
            timer = setInterval(function () {
                setRemaingTime((prevTime) => {
                    if (prevTime <= 0) {
                        return prevTime;
                    }
                    return prevTime - 50;
                });
            }, 50);
            interval.current = timer;
        } else if (interval.current) {
            clearInterval(interval.current);
        }

        // Because project run on strict mode so you should return a function to clean up
        return () => clearInterval(timer);
    }, [isRunning]);

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    return (
        <Container as="article">
            <p>{name}</p>
            <p><progress max={duration * 1000} value={remainingTime} /></p>
            <p>{formattedRemainingTime}</p>
        </Container>
    );
}