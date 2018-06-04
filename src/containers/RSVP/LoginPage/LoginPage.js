import React, { Component } from 'react';
import { auth } from '../../../firebase';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../../components/LoginForm/LoginForm';
import Aux from '../../../hoc/Aux';
import AuthUserContext from '../../../components/AuthUserContext/AuthUserContext';

class LoginPage extends Component {
    state = {
        loginDetails: {
            email: '',
            password: ''
        },
        disabled: false,
        error: ''
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        const {
            email,
            password
        } = this.state.loginDetails;

        this.setState({
            disabled: true,
            error: ''
        })

        const lowerCaseEmail = email.toLowerCase();
        const lowerCasePassword = password.toLowerCase();

        auth.doSignInWithEmailAndPassword(lowerCaseEmail, lowerCasePassword)
            .then((res) => {
                this.setState(() => {
                    return {
                        loginDetails: {
                            email: '',
                            password: ''
                        },
                        disabled: false
                    }
                })
                this.props.history.push(res.uid);
            }).catch((error) => {
                this.setState({
                    error: 'There seems to be a problem with your unique code. Please double check and try again!',
                    disabled: false
                })
            })
    };

    loginDetailsHandler = (event) => {
        const currentLoginDetails = { 
            ...this.state.loginDetails
        }

        const email = event.target.value + '@example.com';

        currentLoginDetails.email = email;
        currentLoginDetails.password = event.target.value;

        this.setState({
            loginDetails: currentLoginDetails
        });
    };

    render() {
        return (
            <Aux>
                <AuthUserContext.Consumer>
                    {authUser => authUser
                        ? <Redirect to={`${authUser.uid}`} />
                        : null }
                </AuthUserContext.Consumer>

                <LoginForm 
                    submitLogin={this.onSubmitHandler}
                    changed={this.loginDetailsHandler}
                    disabled={this.state.disabled}
                    error={this.state.error} />
            </Aux>

        )
    }
}

export default LoginPage;