import React, {Component} from 'react';

import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, FormGroup, Button, Col, Row /*, FormFeedback*/} from 'reactstrap';
import { DatePicker } from 'components/common';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

import CustomerSelector from './CustomerSelector';

import {Options, Logger} from 'helpers';
import {DateUtils} from 'utils';

import classNames from 'classnames/bind';
import styles from './ReservationForm.scss';
const st = classNames.bind(styles);

class ReservationForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      reservationDateTime: null,
      reservationDate: props.reservationDate | DateUtils.format(new Date(), 'yyyyMMdd'),
      reservationHour: '09',
      reservationMinutes: '00',
      customerSelectorOpened: false,
      timeRequired: 3,
      customerName: '',
      phoneNumber: '',
      remark: '',
      customerNo: null,
      serviceCategoryNo: props.serviceCategoryList?props.serviceCategoryList[0].serviceCategoryNo:null
    };
  }

  searchCustomer = () => {
    const customerName = this.state.customerName;
    const phoneNumber = this.state.phoneNumber;
    this.props.onSearchCustomer({
      customerName, phoneNumber
    }).then( e=> {
      this.setState({
        customerName, phoneNumber,
        customerSelectorOpened: true,
      });
    })
    
  }

  selectCustomer = (customer) => {
    // Logger.debug('selectCustomer', customer);
    this.setState({
      customerSelectorOpened:false,
      customerName: customer.customerName,
      phoneNumber: customer.phoneNumber,
      customerNo: customer.customerNo
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
      this.setState({
        reservationDateTime: null,
        reservationDate: nextProps.reservationDate,
        reservationHour: '09',
        reservationMinutes: '00',
        customerSelectorOpened: false,
        timeRequired: 3,
        customerName: '',
        phoneNumber: '',
        remark: '',
        customerNo: null
      });
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const dateString = this.state.reservationDate.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3');
    const dateTimeString = `${dateString} ${this.state.reservationHour}:${this.state.reservationMinutes}:00`;
    const reservationDateTime = new Date(dateTimeString);
    
    this.props.onSubmit({ 
      ...this.state,
      reservationDateTime : reservationDateTime
    }).then(_e => {
      this.props.toggle();
    })
  }

  handleChange = (e) => {
    // Logger.debug(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.type==='checkbox' ? e.target.checked : e.target.value
    });
    
    Logger.debug('state:', this.state);
  }

  render(){
    return (
      <Modal isOpen={this.props.isOpened} toggle={this.props.toggle} centered={true} fade={false} >
        <Form onSubmit={this.handleSubmit}>
        <ModalHeader toggle={this.props.toggle}>예약 등록</ModalHeader>
          <ModalBody>
            
              <FormGroup row>
                <Label sm={3}>예약일시</Label>
                <Col sm={4}>
                  <DatePicker selected={this.state.reservationDate} name="reservationDate" onChange={this.handleChange} required/>
                </Col>
                <Col sm={2}>
                  <Input type="select" name="reservationHour" value={this.state.reservationHour}  onChange={this.handleChange} required>
                    {Options.spread('hours')}
                  </Input>
                </Col>
                <Col sm={2}>
                  <Input type="select" name="reservationMinutes" value={this.state.reservationMinutes}  onChange={this.handleChange} required>
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
                      <Input placeholder="성명" name="customerName" value={this.state.customerName} onChange={this.handleChange} required="true"/>
                    </Col>
                    <Col sm={6}>
                      <Input placeholder="휴대폰번호" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required="true"/>
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
                <Col sm={4}>
                  <Input type="select" value={this.state.serviceCategoryNo} onChange={this.handleChange} name="serviceCategoryNo">
                    {this.props.serviceCategoryList.map(serviceCategory => (
                      <option key={serviceCategory.uuid} value={serviceCategory.serviceCategoryNo}>{serviceCategory.serviceCategoryName}</option>
                    ))}
                  </Input>
                </Col>
                <Col sm={4}>
                  <Input type="select" name="serviceNo" onChange={this.handleChange}>
                    {this.props.serviceList.filter(service => service.serviceCategoryNo === Number(this.state.serviceCategoryNo)).map(service => (
                      <option key={service.uuid} value={service.serviceNo}>{service.serviceName}</option>
                    ))}
                  </Input>
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
            
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">등록</Button>
            <Button type="button" color="secondary" onClick={this.props.toggle}>취소</Button>
          </ModalFooter>
          </Form>
      </Modal>
    )
  }

}

export default ReservationForm;