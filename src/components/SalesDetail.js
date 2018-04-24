import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Table, FormGroup, Label, Form /*, Input, Breadcrumb, BreadcrumbItem*/ } from 'reactstrap';

class SalesDetail extends Component {



  render(){
    return(
      <div>
        <Form inline>
          <FormGroup>
            <Label for="searchFrom">매출일</Label>
            <DatePicker className="form-control" dateFormat="YYYYMMDD"/>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

export default SalesDetail;