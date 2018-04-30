import React, {Component} from 'react';

/** components */
import {Form, Input, Label, FormFeedback, FormGroup, Button, Alert} from 'reactstrap';
import { DatePicker } from 'components/common';

import classNames from 'classnames/bind';
import scss from './RegisterUserForm.scss';
import { DateUtils } from 'utils';

const styles = classNames.bind(scss);


class RegisterShopForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      openDate: DateUtils.format(new Date(),'yyyyMMdd'),
      status: props.status
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      status: nextProps
    })
  }

  onDismiss = () => {
    this.setState({
      status: 0
    })
  }


  render(){
    const {handleSubmit, handleChange} = this;

    return(
      <Form className={styles('form-register')} onSubmit={handleSubmit} >
        <h1 className="h3 mb-3 font-weight-normal">회사 정보</h1>

        <FormGroup>
          <Label for="inputCompanyName">회사명</Label>
          <Input  type="text" 
                  name="companyName" 
                  id="inputCompanyName" 
                  className="form-control" 
                  placeholder="회사명" required 
                  onChange={handleChange}
                  />
        </FormGroup>

        <FormGroup>
          <Label for="inputBusinessNo">사업자번호</Label>
          <Input  type="number" 
                  name="businessNo" 
                  id="inputBusinessNo" 
                  className="form-control" 
                  placeholder="000-00-00000" 
                  onChange={handleChange}
                  />
        </FormGroup>

        <FormGroup>
          <Label for="inputWebsite">웹사이트 주소</Label>
          <Input  type="url" 
                  name="website" 
                  id="inputWebsite" 
                  className="form-control" 
                  placeholder="http://www.website.com" 
                  onChange={handleChange}
                  />
        </FormGroup>

        <FormGroup>
          <Label for="inputOwnerName">대표자명</Label>
          <Input  type="text" 
                  name="ownerName" 
                  id="inputOnwerName" 
                  className="form-control" 
                  placeholder="홍길동" 
                  onChange={handleChange}
                  />
        </FormGroup>


        <h1 className="h3 mb-3 font-weight-normal">샵 정보</h1>

        
        <FormGroup>
        <Label for="inputShopName">매장이름</Label>
        <Input  type="text" name="shopName" id="inputShopName" className="form-control" placeholder="매장명" required 
                onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
        <Label for="inputOpenDate">영업시작일</Label>
        <DatePicker  name="openDate" id="inputOpenDate" className="form-control" placeholder="yyyyMMdd" required 
                onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
        <Label for="inputRemark">메모</Label>
        <Input type="textarea"  name="remark" id="inputRemark" className="form-control"  required 
                onChange={handleChange}/>
        </FormGroup>


        <Button className="btn-lg btn-primary btn-block" type="submit">Register</Button>

        <p className="mt-5 mb-3 text-muted">&copy; {this.year}</p>

        <Alert color="info" isOpen={this.state.status !== 0} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
      </Form> 
    )
  }
}

export default RegisterShopForm;