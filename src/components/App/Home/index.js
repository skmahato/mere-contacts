import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import YourContactsButton from './YourContactsButton';

import './index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={YourContactsButton} />
      </div>
    );
  }
}

export default Home;
