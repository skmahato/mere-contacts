import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class YourContactsButton extends Component {
  render() {
    return (
      <Link to="/contacts" className="your-contacts">
        <button className="your-contacts__button">
          Your Contacts
        </button>
      </Link>
    );
  }
}

export default YourContactsButton;
