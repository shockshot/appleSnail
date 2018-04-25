import React, { Component } from 'react';
import Logger from 'helpers/Logger';
// import DatePicker from 'react-datepicker';
import { DatePicker } from 'components/common';
import moment from 'moment';
import { Button, Table, FormGroup, Label, Form /*, Input, Breadcrumb, BreadcrumbItem*/ } from 'reactstrap';

class SalesDetail extends Component {

  onChangeHandler = (e) => {
    Logger.debug('e', e);
  }

  render(){
    return(
      <div>
        <Form inline>
          <FormGroup>
            <Label for="salesDate">매출일</Label>
            <DatePicker name="salesDate" onChange={this.onChangeHandler} selected="20180425"/>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

export default SalesDetail;