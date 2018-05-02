import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';

import './LoginForm.scss';

class LoginForm extends Component {
    state = {
        disabled: false
    }

    submitLogin = (event) => {
        event.preventDefault();
 
        console.log('TEST');
    }

    render() {
        return (
            <Aux>
                <p>Please enter the unique code from your invitation</p>
                <form className="login-form" onSubmit={this.submitLogin}>
                    <input />
                    <Button title="Login" 
                        clicked={this.submitLogin} 
                        disabled={this.state.disabled} />
                </form>
            </Aux>
        )
    }
}

export default LoginForm;