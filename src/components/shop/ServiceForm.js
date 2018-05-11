import React, {Component} from 'react';

import {Options, Logger} from 'helpers';

import {Form, Input, Label, FormGroup, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faTimes, faEdit } from '@fortawesome/fontawesome-free-solid';

import classNames from 'classnames/bind';
import scss from './ServiceForm.scss';
const styles = classNames.bind(scss);

class ServiceForm extends Component {

  constructor(props){
    super(props);
    this.initialState = {
      ...props.service
    };
    this.state = {...this.initialState};
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleEdit = (e) => {
    this.props.onEdit(this.state.uuid);
  }

  handleCancel = (e) => {
    this.props.onCancel(this.state.uuid);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleDelete = (e) => {
    this.props.onDelete(this.state);
  }

  componentWillReceiveProps(nextProps){
    Logger.debug('componentWillReceiveProps', nextProps.service);
  }

  render(){
    return (
      <Form inline onSubmit={this.handleSubmit} className={this.state.isEditting ? styles('edittingForm') : styles('form')}>
        <FormGroup>
          <Input name="serviceName" 
                value={this.state.serviceName} 
                placeholder={this.state.isEditting?"서비스명":''} 
                disabled={!this.state.isEditting} 
                onChange={this.handleChange}
                />

          <Input name="serviceDescription" 
                value={this.state.serviceDescription} 
                placeholder={this.state.isEditting?"설명":''} 
                disabled={!this.state.isEditting} 
                onChange={this.handleChange}/>

          <Input name="price" 
                type="number"
                value={this.state.price}
                placeholder={this.state.isEditting?0:''} 
                disabled={!this.state.isEditting} 
                onChange={this.handleChange}
                />

          <Input name="timeRequired" 
                type="select"
                value={this.state.timeRequired}
                placeholder={this.state.isEditting?0:''} 
                disabled={!this.state.isEditting} 
                onChange={this.handleChange}>
                {Options.spread('timeUnits')}
          </Input>

          <Button className={styles('hiddenBtn')+" btn-circle"} onClick={this.handleEdit}>
            <FontAwesomeIcon icon={faEdit}/>
          </Button>
          <Button className={styles('hiddenBtn')+" btn-circle"} onClick={this.handleDelete}>
            <FontAwesomeIcon icon={faMinus}/>
          </Button>
          <Button className={styles('edittingBtn')+" btn-circle"} type="submit">
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

export default ServiceForm;