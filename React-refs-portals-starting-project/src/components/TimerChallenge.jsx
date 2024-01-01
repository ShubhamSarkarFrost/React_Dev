import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    function HandleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function HandleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="Lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? HandleStop : HandleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time Is Running...' : 'Timer Inactive'}
                </p>
            </section>
        </>)
}