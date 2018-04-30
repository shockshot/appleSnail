import React from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({dateFormat = 'YYYYMMDD', name, selected = (new Date()), onChange = f=>f}) =>
<ReactDatePicker 
  className="form-control" 
  dateFormat={dateFormat}
  selected={ selected instanceof Date ? moment(selected) :  moment(selected, dateFormat)  }
  onChange={(e) => {
    onChange({
      selectedDate: e.format(dateFormat),
      name: name,
      target: { name: name , value: e.format(dateFormat)}
    });
  }}
  name={name}
/>

export default DatePicker;