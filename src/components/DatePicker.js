import React, {Component} from 'react';
import _DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const defaultDateFormat = 'YYYYMMDD';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.dateFormat = props.dateFormat ? props.dateFormat : defaultDateFormat;
  }

  onChangeHandler = (e) => {
    this.props.onChange({
      selectedDate: e.format(this.dateFormat),
      targetName: this.props.targetName
    });
  }

  render(){
    return (
      <_DatePicker className="form-control" 
          dateFormat={this.dateFormat}
          selected={moment(this.props.selected, this.dateFormat)}
          onChange={this.onChangeHandler} 
          />
    )
  }
}


export default DatePicker;