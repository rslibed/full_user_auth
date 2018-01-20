import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helpers';

class SignUp extends Component {
    
    handleSignIn(vals) {
        console.log("vals: ", vals)
    }
    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card grey lighten-3">
                        <div className="card-content">
                            <span className="card-title">Sign In</span>
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                <Field name="email" type="text" placeholder="Enter email address" component={renderInput}/>
                                <Field name="password" type="password" placeholder="Enter your password" component={renderInput}/>
                                <div className="right-align">
                                    <button className="btn blue darken-4">Sign In</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const error = {}
    if (!values.email) {
        error.email = 'Please enter an email';
    }
    if (!values.password) {
        error.password = 'Please enter your password';
    }
    return error;
}

SignUp = reduxForm({
    form: 'sign-in',
    validate
})(SignUp)

export default SignUp;