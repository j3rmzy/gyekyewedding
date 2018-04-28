import React, { Component } from 'react';
import './App.css';

import Home from './containers/Home/Home';
import OurStory from './containers/OurStory/OurStory';
import Details from './containers/Details/Details';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <OurStory />
        <Details />
      </div>
    );
  }
}

export default App;
