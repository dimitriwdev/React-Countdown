import React, { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import { makeStyles } from '@material-ui/core/styles';
import Countdown from "./components/Countdown";
import DatePicker from 'react-datepicker';

const useStyles = makeStyles(() => ({
  app: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgb(95, 10, 135) 0%, rgb(164, 80, 139) 100%)',
    minHeight: '100vh',
    minWidth: '100vw',

  },
  title: {
    color: '#fff',
    textShadow: '3px 3px rgba(50, 50, 70, 0.5)',
  },
  datePicker: {
    fontSize: '20px',
    padding: '15px',
    borderRadius: '15px',
    border: 'none',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    textShadow: '1px 1px rgba(50, 50, 70, 0.5)',
    color: '#fff',
    margin: '100px',
    '&:focus': {
      background: '#fff',
      color: '#000',
    },
  },
}))

const App = () => {
  const classes = useStyles();
  const date = new Date();
  date.setHours(24, 0, 0, 0);
  const tomorrowMidnight = date.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(tomorrowMidnight);
  let datePickerTimestamp = new Date(selectedDate).valueOf();

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>Pick a date</h1>
      <div>
        <DatePicker
          className={classes.datePicker}
          dateFormat='dd/MM/yyyy'
          minDate={tomorrowMidnight}
          onChange={date => setSelectedDate(date)}
          popperPlacement='auto'
          selected={selectedDate}
        />
      </div>
      <Countdown countdownTimestampMs={datePickerTimestamp} />
    </div>
  );
}


export default App;

