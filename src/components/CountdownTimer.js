import dayjs from "dayjs";

const getRemainingDays = (nowDayjs, timestampDayJs) => {
    const days = timestampDayJs.diff(nowDayjs, 'days');
    return days < 10 ? "0" + days : days;
}

const getRemainingHours = (nowDayjs, timestampDayJs) => {
    const hours = timestampDayJs.diff(nowDayjs, 'hours') % 24;
    return hours < 10 ? "0" + hours : hours;
}

const getRemainingMinutes = (nowDayjs, timestampDayJs) => {
    const minutes = timestampDayJs.diff(nowDayjs, 'minutes') % 60;
    return minutes < 10 ? "0" + minutes : minutes;
}

const getRemainingSeconds = (nowDayjs, timestampDayJs) => {
    const seconds = timestampDayJs.diff(nowDayjs, 'seconds') % 60;
    return seconds < 10 ? "0" + seconds : seconds;
}

export const CountdownTimer = (timestampMs) => {
    const timestampDayJs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if (timestampDayJs.isBefore(nowDayjs)){
        return {
            days: '00', 
            hours: '00', 
            minutes: '00', 
            seconds: '00',
        }
    } else {
        return {
            days: getRemainingDays(nowDayjs, timestampDayJs), 
            hours: getRemainingHours(nowDayjs, timestampDayJs), 
            minutes: getRemainingMinutes(nowDayjs, timestampDayJs), 
            seconds: getRemainingSeconds(nowDayjs, timestampDayJs),
        }
    }
}
