import React, {Component} from 'react';
import _DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({dateFormat = 'YYYYMMDD', name, selected, onChange = f=>f}) =>
<_DatePicker 
  className="form-control" 
  dateFormat={dateFormat}
  selected={moment(selected, dateFormat)}
  onChange={(e) => {
    onChange({
      selectedDate: e.format(dateFormat),
      name: name
    });
  }}
  name={name}
/>

export default DatePicker;