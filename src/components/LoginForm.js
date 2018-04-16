import React, {Component} from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLogin(this.userId.value, this.password.value);
    }

    render(){
        const {onSubmit, handleSubmit} = this;

        return(
            <form className="form-signin" onSubmit={handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" ref={(c) => { this.userId = c; }} className="form-control" placeholder="Email address" required autoFocus ></input>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" ref={(c) => { this.password = c; }} className="form-control" placeholder="Password" required></input>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"></input> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form> 
        )
    }
}


// const LoginForm = ({onLogin = f=>f}) => 


export default LoginForm;