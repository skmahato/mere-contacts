import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';

import './index.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={Home} />

        <Switch>
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
