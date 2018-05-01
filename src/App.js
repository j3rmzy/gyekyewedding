import React, { Component } from 'react';
import './App.scss';

import Layout from './containers/Layout/Layout';

import Home from './containers/Home/Home';
import OurStory from './containers/OurStory/OurStory';
import Details from './containers/Details/Details';
import Accommodation from './containers/Accommodation/Accommodation';
import Gifts from './containers/Gifts/Gifts';

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
        <OurStory />
        <Details />
        <Accommodation />
        <Gifts />
      </Layout>
    );
  }
}

export default App;
