import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
import DatePicker from './DatePicker';
import moment from 'moment';
import { Button, Table, FormGroup, Label, Form /*, Input, Breadcrumb, BreadcrumbItem*/ } from 'reactstrap';

class SalesDetail extends Component {

  onChangeHandler = (e) => {
    console.log('e', e);
  }

  render(){
    return(
      <div>
        <Form inline>
          <FormGroup>
            <Label for="searchFrom">매출일</Label>
            <DatePicker targetName="salesDate" onChange={this.onChangeHandler} selected="20180425"/>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

export default SalesDetail;