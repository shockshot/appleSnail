import React, {Component} from 'react';

import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, FormGroup, Button, Col, Row /*, FormFeedback*/} from 'reactstrap';
import { DatePicker } from 'components/common';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

class ReservationForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      reservationDate: props.reservationDate,
      reservationTime: props.reservationTime
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({...nextProps});
  }

  handleChange = (e) => {
    
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
                  <Input type="select">
                    <option>9시</option>
                    <option>10시</option>
                    <option>11시</option>
                    <option>12시</option>
                    <option>13시</option>
                    <option>14시</option>
                    <option>15시</option>
                    <option>16시</option>
                    <option>17시</option>
                    <option>18시</option>
                    <option>19시</option>
                    <option>20시</option>
                  </Input>
                </Col>
                <Col sm={2}>
                  <Input type="select">
                    <option>0분</option>
                    <option>10분</option>
                    <option>20분</option>
                    <option>30분</option>
                    <option>40분</option>
                    <option>50분</option>
                  </Input>
                </Col>
                <Col sm={1} />
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>예약인</Label>
                <Col sm={8}>
                  <Row>
                    <Col sm={4}>
                      <Input placeholder="성명" name="customerName"/>
                    </Col>
                    <Col sm={6}>
                      <Input placeholder="휴대폰번호" name="phoneNumber"/>
                    </Col>
                    <Col sm={2}>
                      <Button type="button">
                        <FontAwesomeIcon icon={faSearch}/>
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />
                        비회원
                      </Label>
                    </FormGroup>
                  </Row>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3}>메모</Label>
                <Col sm={9}>
                  <Input type="textarea"/>
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