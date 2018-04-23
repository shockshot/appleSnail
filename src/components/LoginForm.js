import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LoginForm.css';

class LoginForm extends Component {

    // constructor(props){
    //     super(props);
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLogin(this.userId.value, this.password.value);
    }

    render(){
        const { handleSubmit} = this;

        return(
            <Form className="form-signin" onSubmit={handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Label for="inputEmail" className="sr-only">Email address</Label>
                <Input type="text" id="inputEmail" innerRef={(c) => { this.userId = c; }} className="form-control" placeholder="Email address" required autoFocus />
                <Label for="inputPassword" className="sr-only">Password</Label>
                <Input  type="password" id="inputPassword" innerRef={(c) => { this.password = c; }} className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <Label>
                    <Input type="checkbox" value="remember-me" /> Remember me
                    </Label>
                </div>
                <Button className="btn-lg btn-primary btn-block" type="submit">Sign in</Button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </Form> 
        )
    }
}


// const LoginForm = ({onLogin = f=>f}) => 


export default LoginForm;