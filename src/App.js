import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Layout from './containers/Layout/Layout';

import Home from './containers/Home/Home';
import OurStory from './containers/OurStory/OurStory';
import Details from './containers/Details/Details';
import Accommodation from './containers/Accommodation/Accommodation';
import Gifts from './containers/Gifts/Gifts';
import RSVP from './containers/RSVP/RSVP';

import Aux from './hoc/Aux';
import withAuthentication from './hoc/withAuthentication';

class App extends Component {
    render() {
        const Homepage = () => (
            <Aux>
                <Home />
                <OurStory />
                <Details />
                <Accommodation />
                <Gifts />
            </Aux>
        );

        return (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route component={Homepage} />
                </Switch>
            </Layout>
        );
    }
}

export default withAuthentication(App);
