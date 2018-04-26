import React, {Component} from 'react';
import { Button, Form, /*FormGroup,*/ Label, Input, /*FormText*/ } from 'reactstrap';
import { DateUtils } from 'utils';
import { Logger, history, regex } from 'helpers';

/** rxjs */
import * as Rx from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

/** styles */
import classNames from 'classnames/bind';
import scss from './RegisterForm.scss';
const styles = classNames.bind(scss);

class RegisterForm extends Component {

  year = DateUtils.format(new Date(),'yyyy');

  constructor(props){
    super(props);

    this.userId$   = new Rx.Subject();
    
    this.state = {
      isValid: {
        id: false
      },
      duplicatedCheck: false
    }
  }
    

  componentDidMount(){
    this.userId$
      .debounceTime(500)
      .subscribe(userId => {
        //이메일 형식에 맞음
        if(regex.email.test(userId)){
          this.state.isValid.id = true;
          this.props.onDuplicatedCheck(userId);
        }else{ //형식에 맞지 않음
          this.setState({
            ...this.state,
            isValid : {
              ...this.state.isValid,
              id: false
            }
          })
        }
        // Logger.debug('state', this.state);
      })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      ...this.state,
      duplicatedCheck: nextProps.duplicatedCheck
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      // this.props.onLogin(this.form.userId.value, this.form.password.value);
  }

  handleChange = (e) => {

    if(e.target.name === 'passwordConfirm'){
      if(this.state.password === e.target.value){
        this.setState({isValid:{...this.state.isValid, passwordConfirm: true}});
      }else{
        this.setState({isValid:{...this.state.isValid, passwordConfirm: false}});
      }
    }

    this.setState({[e.target.name] : e.target.value});
  }

  render(){
    const { handleSubmit, handleJoin, idValidCheck} = this;

    return(
      <Form className={styles('form-register')} onSubmit={handleSubmit} innerRef={c => this.form = c}>
        {/* <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img> */}
        <h1 className="h3 mb-3 font-weight-normal">회원가입</h1>

        <Label for="inputEmail">이메일 ID</Label>
        { !this.state.isValid.id ? '' : (
          this.state.duplicatedCheck === null ? '' : (
            this.state.duplicatedCheck === false ? <span>중복</span> : <span>. OK.</span>
          )
        ) }

        <Input  type="email" 
                name="userId" 
                id="inputEmail" 
                className="form-control" 
                placeholder="abc@gmail.com" 
                required 
                autoFocus 
                onChange={e => this.userId$.next(e.target.value)} />

        <Label for="inputPassword">패스워드</Label>
        <Input  type="password" 
                name="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="********" required 
                onChange={this.handleChange}
                />

        <Label for="inputPasswordConfirm">패스워드 확인</Label>
        <Input  type="password" 
                name="passwordConfirm" 
                id="inputPasswordConfirm" 
                className="form-control" 
                placeholder="********" required 
                onChange={this.handleChange}
                />

        <Label for="userName">성명</Label>
        <Input  type="text" name="userName" id="userName" className="form-control" placeholder="홍길동" required 
                onChange={this.handleChange}/>

        <Label for="phoneNo">휴대폰</Label>
        <Input  type="tel" name="phoneNo" id="phoneNo" className="form-control" placeholder="010-1234-5678" required 
                onChange={this.handleChange}/>

        <Button className="btn-lg btn-primary btn-block" type="submit">Register</Button>

        <Button onClick={e=>Logger.debug(this.state)}>show state</Button>
        <p className="mt-5 mb-3 text-muted">&copy; {this.year}</p>
      </Form> 
    )
  }
}



export default RegisterForm;