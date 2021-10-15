import React, { useEffect, useState } from "react";
import { CountdownTimer } from './CountdownTimer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    countdown: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    countdownContainer: {
        display: 'flex',
        marginTop: '50px',
    },
    timeBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px 20px',
    },
    time: {
        fontSize: '70px',
        color: '#fff',
        textShadow: '3px 3px rgba(50, 50, 70, 0.5)',
        width: '2ch',
    },
    timeRef: {
        color: '#fff',
        textShadow: '2px 2px rgba(50, 50, 70, 0.5)',
    },
}))

const defaultRemainingTime = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
}

const Countdown = ({ countdownTimestampMs }) => {
    const classes = useStyles();
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs]);

    const updateRemainingTime = (countdown) => {
        setRemainingTime(CountdownTimer(countdown));
    }

    return (
        <div className={classes.countdown}>
            <div className={classes.countdownContainer}>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.days}</span>
                    <span className={classes.timeRef}>days</span>
                </div>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.hours}</span>
                    <span className={classes.timeRef}>hours</span>
                </div>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.minutes}</span>
                    <span className={classes.timeRef}>minutes</span>
                </div>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.seconds}</span>
                    <span className={classes.timeRef}>seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
