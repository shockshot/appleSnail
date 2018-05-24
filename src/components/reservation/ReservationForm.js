import React, {Component} from 'react';

import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, FormGroup, Button, Col, Row /*, FormFeedback*/} from 'reactstrap';
import { DatePicker } from 'components/common';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

import CustomerSelector from './CustomerSelector';

import {Options, Logger} from 'helpers';

import classNames from 'classnames/bind';
import styles from './ReservationForm.scss';
const st = classNames.bind(styles);

class ReservationForm extends Component {

  constructor(props){
    super(props);
    this.initialState = {
      reservationDate: props.reservationDate,
      reservationHour: 9,
      reservationMinutes: 0,
      customerSelectorOpened: false,
      timeRequired: 3,
      customerName: '',
      phoneNumber: '',
      remark: '',
    };
    this.state = this.initialState;
  }

  searchCustomer = () => {
    
    this.props.onSearchCustomer({
      customerName: this.state.customerName,
      phoneNumber: this.state.phoneNumber
    }).then( e=> {
      this.setState({customerSelectorOpened:true});
    })
    
  }

  selectCustomer = (customer) => {
    Logger.debug('selectCustomer', customer);
    this.setState({
      customerSelectorOpened:false,
      ...customer
    })
  }

  closeCustomerPopup = () => {
    this.setState({
      customerSelectorOpened:false
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isFormOpened){
      this.setState({...nextProps});
    }else{
      this.setState(this.initialState);
    }
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type==='checkbox' ? e.target.checked : e.target.value
    });
  }

  render(){
    return (
      <Modal isOpen={this.props.isOpened} toggle={this.props.toggle} centered={true} fade={false} >
        <ModalHeader toggle={this.props.toggle}>예약 등록</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label sm={3}>예약일시</Label>
                <Col sm={4}>
                  <DatePicker selected={this.state.reservationDate} name="reservaionDate" onChange={this.handleChange} />
                </Col>
                <Col sm={2}>
                  <Input type="select" name="reservationHour" value={this.state.reservationHour}  onChange={this.handleChange} >
                    {Options.spread('hours')}
                  </Input>
                </Col>
                <Col sm={2}>
                  <Input type="select" name="reservationMinutes" value={this.state.reservationMinutes}  onChange={this.handleChange} >
                    {Options.spread('minutes')}
                  </Input>
                </Col>
                <Col sm={1} />
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>예약인</Label>
                <Col sm={8}>
                  <Row>
                    <Col sm={4}>
                      <Input placeholder="성명" name="customerName" value={this.state.customerName} onChange={this.handleChange}/>
                    </Col>
                    <Col sm={6}>
                      <Input placeholder="휴대폰번호" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
                    </Col>
                    <Col sm={2}>
                      <Button type="button" onClick={this.searchCustomer}>
                        <FontAwesomeIcon icon={faSearch}/>
                      </Button>
                    </Col>
                  </Row>
                  <CustomerSelector 
                    isOpened={this.state.customerSelectorOpened} 
                    onClose={this.closeCustomerPopup}
                    customerList={this.props.customerList}
                    onSelectCustomer={this.selectCustomer}
                    />
                  <Row>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="notRegistered" onChange={this.handleChange}/>
                        비회원
                      </Label>
                    </FormGroup>
                  </Row>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>시술종류</Label>
                <Col sm={9}>
                  <Input type="text"/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>예상소요시간</Label>
                <Col sm={9}>
                  <Input type="select" name="timeRequired" value={this.state.timeRequired} onChange={this.handleChange} >
                    {Options.spread('timeUnits')}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>메모</Label>
                <Col sm={9}>
                  <Input type="textarea" name="remark" onChange={this.handleChange} value={this.state.remark}/>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>등록</Button>
            <Button color="secondary" onClick={this.props.toggle}>취소</Button>
          </ModalFooter>
      </Modal>
    )
  }

}

export default ReservationForm;