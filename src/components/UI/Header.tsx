import Button from "../Button";
import { useTimersContext } from "../store/timers-context";

export default function Header() {
    const timersCtx = useTimersContext();

    return (
        <header>
            <h1>React Timer</h1>
            <Button onClick={timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers}>
                {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
            </Button>
        </header>
    );
}