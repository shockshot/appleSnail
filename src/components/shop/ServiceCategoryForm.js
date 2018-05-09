import React , {Component} from 'react';

import {Form, Input, Label, FormGroup, Button /*, FormFeedback*/} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faTimes, faEdit } from '@fortawesome/fontawesome-free-solid';

import classNames from 'classnames/bind';
import scss from './ServiceCategoryForm.scss';
import { Logger } from 'helpers';
const styles = classNames.bind(scss);

class ServiceCategoryForm extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      isEditting: props.serviceCategory.isEditting ? true : false,
      serviceCategoryNo: props.serviceCategory.serviceCategoryNo,
      serviceCategoryName: props.serviceCategory.serviceCategoryName ? props.serviceCategory.serviceCategoryName : '',
      categoryDescription: props.serviceCategory.categoryDescription ? props.serviceCategory.categoryDescription : ''
    };
    this.state = {...this.initialState};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      serviceCategoryNo: this.state.serviceCategoryNo,
      serviceCategoryName: this.state.serviceCategoryName,
      categoryDescription: this.state.categoryDescription
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCancel = () => {
    this.setState(this.initialState);
  }

  handleDelete = () => {
    this.props.onDelete(this.state.serviceCategoryNo);
  }

  render(){
    return (
      <Form inline onSubmit={this.handleSubmit} className={this.state.isEditting ? styles('edittingForm') : styles('form')}>
        <FormGroup>
          <Input name="serviceCategoryName" value={this.state.serviceCategoryName} placeholder={this.state.isEditting?"그룹 이름":''} readOnly={!this.state.isEditting} onChange={this.handleChange}/>
          <Input name="categoryDescription" value={this.state.categoryDescription} placeholder={this.state.isEditting?"설명":''} readOnly={!this.state.isEditting} onChange={this.handleChange}/>
          <Button className={styles('hiddenBtn')+" btn-circle"} onClick={e=>this.setState({isEditting:true})}>
            <FontAwesomeIcon icon={faEdit}/>
          </Button>
          <Button className={styles('hiddenBtn')+" btn-circle"}>
            <FontAwesomeIcon icon={faMinus}/>
          </Button>
          <Button className={styles('edittingBtn')+" btn-circle"}>
            <FontAwesomeIcon icon={faCheck}/>
          </Button>
          <Button className={styles('edittingBtn')+" btn-circle"} onClick={this.handleCancel}>
            <FontAwesomeIcon icon={faTimes}/>
          </Button>
        </FormGroup>
      </Form>
    )
  }
}



export default ServiceCategoryForm;