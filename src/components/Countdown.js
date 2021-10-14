import React, { useEffect, useState } from "react";
import { CountdownTimer } from './CountdownTimer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    countdown: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      height: '75vh',
    },
    countdownContainer: {
        display: 'flex',
        padding: '30px',
        borderRadius: '100px',
        backgroundColor: 'skyblue',
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
                    <span>days</span>
                </div>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.hours}</span>
                    <span>hours</span>
                </div>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.minutes}</span>
                    <span>minutes</span>
                </div>
                <div className={classes.timeBlock}>
                    <span className={classes.time}>{remainingTime.seconds}</span>
                    <span>seconds</span>
                </div>
            </div>
        </div>
      );
    };
    
    export default Countdown;
