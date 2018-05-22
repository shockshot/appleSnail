import { Logger } from "helpers";

import React, {Component} from 'react';
import {Form, Input, Label, FormGroup, Button, Col } from 'reactstrap';
// import DatePicker from 'components/common/DatePicker'

import { faCheck } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
const styles = classNames.bind(require('./CustomerSimpleForm.scss'));

class CustomerSimpleForm extends Component {

  constructor(props){
    super(props);
    // this.initialState = {
    //   ...props.customer
    // };
    // this.state = {...this.initialState};
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
    
    Logger.debug('state:', this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    
  }


  render(){
    return (
      <Form className={styles('CustomerSimpleForm')} onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="customerName" sm={1}>성명</Label>
          <Col sm={2}>
            <Input name="customerName" 
                  placeholder="성명" 
                  onChange={this.handleChange}
                  />
          </Col>
          <Label for="phoneNumber" sm={1}>휴대폰</Label>
          <Col sm={2}>
            <Input name="phoneNumber" 
                  placeholder="01012345678" 
                  onChange={this.handleChange}
                  />
          </Col>
          <Label for="birthDate" sm={1}>생년월일</Label>
          <Col sm={2}>
            <Input name="birthDate" 
                  placeholder="YYYYMMDD" 
                  onChange={this.handleChange}
                  />
          </Col>
        </FormGroup>
        <FormGroup row>
          
          <Label sm={1}>성별</Label>
          <Label check sm={1}>
            <Input type="radio" name="sex" defaultChecked="true" onChange={this.handleChange} value="FEMALE"/>
            여성
          </Label>
          <Label check sm={1}>
            <Input type="radio" name="sex" onChange={this.handleChange}  value="MALE"/>
            남성
          </Label>

          <Label for="remark" sm={1}>메모</Label>
          <Col sm={6}>
            <Input type="text" name="remark" id="remark" placeholder="메모" onChange={this.handleChange}/>
          </Col>
          <Col sm={2}>
            <Button type="submit">
              <FontAwesomeIcon icon={faCheck}/>
              등록
            </Button>
          </Col>
        </FormGroup>

      </Form>
    )
  }
}

export default CustomerSimpleForm;