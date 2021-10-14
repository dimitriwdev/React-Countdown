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
      // background: 
    },
  }))
const App = () => {
  const classes = useStyles();
  const date = new Date();
  date.setHours(24,0,0,0);
  const tomorrowMidnight = date.setHours(0,0,0,0);
  const [selectedDate, setSelectedDate] = useState(tomorrowMidnight);
  let datePickerTimestamp = new Date(selectedDate).valueOf();
  
  return (
    <div className={classes.app}>
      <h1>Pick a date</h1>
      <div>
      <DatePicker
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

