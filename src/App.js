import React, { Component } from 'react';
import './App.css';

import Home from './containers/Home/Home';
import OurStory from './containers/OurStory/OurStory';
import Details from './containers/Details/Details';
import Accommodation from './containers/Accommodation/Accommodation';
import Gifts from './containers/Gifts/Gifts';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <OurStory />
        <Details />
        <Accommodation />
        <Gifts />
      </div>
    );
  }
}

export default App;
