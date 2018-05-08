import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import LoginPage from './LoginPage/LoginPage';
import DetailsPage from './DetailsPage/DetailsPage';

import './RSVP.scss';

class RSVP extends Component {
    render() {
        return (
            <div className="rsvp">
                <Wrapper>
                    <h1>RSVP</h1>
                    <div className="rsvp-inner">
                        <Switch>
                            <Route path={`${this.props.match.url}/login`} component={LoginPage} />
                            <Route path={`${this.props.match.url}/:uid`} component={DetailsPage} />
                        </Switch>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default RSVP;