import React, { useEffect, useState } from "react";


export default function Countdown(props) {
    const { date } = props;
    //Timer:
    // https://github.com/do-community/react-hooks-timer/blob/master/src/App.js

    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div class="countdown">
                <div class="timeLeft">
                    {timeLeft[interval] || "0"}
                </div>
                <div class="title">
                    {interval}
                </div>
            </div>
        );
    });
    return (
        <div class="dailyDropCountdown">
            {timerComponents ? timerComponents : <span>Time's up!</span>}
        </div>
    );

}