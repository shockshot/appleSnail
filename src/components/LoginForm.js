import React, {Component} from 'react';
import { Button, Form, /*FormGroup,*/ Label, Input, /*FormText*/ } from 'reactstrap';
import { DateUtils } from 'utils';
import { history } from 'helpers';

import classNames from 'classnames/bind';
const styles = classNames.bind(require('./LoginForm.scss'));

class LoginForm extends Component {

    // constructor(props){
    //     super(props);
    // }
    year = DateUtils.format(new Date(),'yyyy');

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLogin(this.form.userId.value, this.form.password.value);
    }

    handleJoin = (e) => {
        history.push('register')
    }

    render(){
        const { handleSubmit, handleJoin} = this;

        return(
            <div className={styles('login')}>
                <Form className={styles('form-signin')} onSubmit={handleSubmit} innerRef={c => this.form = c}>
                    {/* <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img> */}
                    <h1 className="h3 mb-3 font-weight-normal">Applesnail</h1>
                    <Label for="inputEmail" className="sr-only">Email address</Label>
                    <Input type="text" name="userId" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <Label for="inputPassword" className="sr-only">Password</Label>
                    <Input  type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                        <Label>
                            <Input type="checkbox" value="remember-me" /> Remember me
                        </Label>
                    </div>
                    <Button className="btn-lg btn-primary btn-block" type="submit">Log in</Button>
                    <Button className="btn-lg btn-primary btn-block" type="button" onClick={handleJoin}>Register</Button>
                    <p className="mt-5 mb-3 text-muted">&copy; {this.year}</p>
                </Form> 
            </div>
        )
    }
}


// const LoginForm = ({onLogin = f=>f}) => 


export default LoginForm;