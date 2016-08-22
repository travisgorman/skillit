import React from 'react';
import { Link } from 'react-router';
import store from '../store';

export default React.createClass({
  render: function () {
    return (
      <header>
        <h1 className='logo'>swap</h1>
        <nav>
          <span className="icon-user-2 navLink"> </span>
          <span className="icon-mail navLink"> </span>
        </nav>
      </header>
    )
  }
});

// <Link to='/Welcome' className='navLink'>profile</Link>
// <Link to='/EditMyProfile' className='navLink'>inbox</Link>