import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

import './index.scss';

class Header extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="container">
          <NavLink to='/' className="logo">
            <span className="logo__mere">mere</span><span className="logo__contacts">Contacts</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
