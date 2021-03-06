import React , {Component} from 'react';
import PropTypes from 'prop-types';

import {Form, Input, Label, FormGroup, Button /*, FormFeedback*/} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck, faMinus, faTimes, faEdit } from '@fortawesome/fontawesome-free-solid';

import { Logger } from 'helpers';

import classNames from 'classnames/bind';
import scss from './ServiceCategoryForm.scss';
const styles = classNames.bind(scss);

class ServiceCategoryForm extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      ...props.serviceCategory,
      categoryDescription: props.serviceCategory.categoryDescription || ''
    };
    this.state = {...this.initialState};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleEdit = (e) => {
    // this.setState({isEditting:true});
    this.props.onEdit(this.props.serviceCategory.uuid);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCancel = () => {
    // this.setState(this.initialState);
    this.props.onCancel(this.state.uuid);
  }

  handleDelete = () => {
    this.props.onDelete(this.state);
  }

  render(){
    return (
      <Form inline onSubmit={this.handleSubmit} className={this.state.isEditting ? styles('edittingForm') : styles('form')}>
        <FormGroup>
          <Input name="serviceCategoryName" 
                value={this.state.serviceCategoryName} 
                placeholder={this.state.isEditting?"그룹 이름":''} 
                disabled={!this.state.isEditting} 
                onChange={this.handleChange}
                />
          <Input name="categoryDescription" 
                value={this.state.categoryDescription} 
                placeholder={this.state.isEditting?"설명":''} 
                disabled={!this.state.isEditting} 
                onChange={this.handleChange}/>
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


// ServiceCategoryForm.propTypes = {
//   serviceCategory: PropTypes.object.isRequired
// }

// ServiceCategoryForm.defaultProps = {

// }


export default ServiceCategoryForm;