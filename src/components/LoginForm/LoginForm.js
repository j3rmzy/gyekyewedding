import React from 'react';

import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';
import Error from '../Error/Error';

import './LoginForm.scss';

const loginForm = (props) => {
    return (
        <Aux>
            <p>Please enter the unique code from your invitation</p>
            <form className="login-form" onSubmit={props.submitLogin}>
                <input onChange={props.changed} className={props.error ? "error" : null} />

                {props.error ? <Error error={props.error} /> : null}

                <Button
                    title="Login" 
                    clicked={props.submitLogin} 
                    disabled={props.disabled} />
            </form>
        </Aux>
    )
}

export default loginForm;