import React, { Component } from 'react';
import { Logger } from 'helpers';
// import DatePicker from 'react-datepicker';
import { DatePicker } from 'components/common';
import { FormGroup, Label, Form, Col, Button, Input, Row, ListGroup, ListGroupItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faCheck, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

import classNames from 'classnames/bind';
import scss from './SalesForm.scss';
const styles = classNames.bind(scss);

class SalesForm extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  handleSubmit = (e) => {
    e.preventDefault();
    Logger.debug('handleSubmit:', this.state);


    this.props.onSubmit();
  }

  handleDelete = (e) => {

    this.props.onDelete();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
    Logger.debug('e', e);
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="salesDate" sm={2}>날짜</Label>
            <Col sm={10}>
              <DatePicker name="salesDate" onChange={this.onChangeHandler} selected="20180425"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>고객</Label>
            <Col sm={10}>
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
            <Label for="salesDate" sm={2}>담당자</Label>
            <Col sm={10}>
              <Input />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>시술</Label>
            <Col sm={10}>
              <Row>
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
              </Row>
              <Row>
                <Col sm={12}>
                  <ListGroup>
                    <ListGroupItem>
                      <span>손톱 > 기본</span>
                      <span className="fr">1000원</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      <span>손톱 > 아트</span>
                      <span className="fr">1000원</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      <span>합계</span>
                      <span className="fr">2000원</span>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>할인</Label>
            <Col sm={10}>
              <Row>
                <Col sm={4}>
                <Input type="select" value={this.state.serviceCategoryNo} onChange={this.handleChange} name="serviceCategoryNo">
                  {this.props.serviceCategoryList ? this.props.serviceCategoryList.map(serviceCategory => (
                    <option key={serviceCategory.uuid} value={serviceCategory.serviceCategoryNo}>{serviceCategory.serviceCategoryName}</option>
                  )): ''}
                </Input>
                </Col>
                <Col sm={4}>
                <Input type="select" name="serviceNo" onChange={this.handleChange}>
                  {this.props.serviceList ? this.props.serviceList.filter(service => service.serviceCategoryNo === Number(this.state.serviceCategoryNo)).map(service => (
                    <option key={service.uuid} value={service.serviceNo}>{service.serviceName}</option>
                  )): ''}
                </Input>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <ListGroup>
                    <ListGroupItem>
                      <span>손톱 > 기본</span>
                      <span className="fr">1000원</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      <span>손톱 > 아트</span>
                      <span className="fr">1000원</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      <span>할인합계</span>
                      <span className="fr">2000원</span>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>결제</Label>
            <Col sm={10}>
              <Row>
                <Col sm={12}>
                  <ListGroup>
                    <ListGroupItem>
                      <span>최종결제금액</span>
                      <span className="fr">2000원</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FormGroup row className={styles('noBottomMargin')}>
                        <Label sm={4}>카드</Label>
                        <Col><Input /></Col>
                      </FormGroup>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FormGroup row className={styles('noBottomMargin')}>
                        <Label sm={4}>현금</Label>
                        <Col><Input /></Col>
                      </FormGroup>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FormGroup row className={styles('noBottomMargin')}>
                        <Label sm={4}>회원권</Label>
                        <Col><Input /></Col>
                      </FormGroup>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="salesDate" sm={2}>메모</Label>
            <Col sm={10}>
              <Input type="textarea"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Button type="button" onClick={this.handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} />
              삭제
            </Button>{' '}
            <Button type="submit">
              <FontAwesomeIcon icon={faCheck} />
              확인
            </Button>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

export default SalesForm;