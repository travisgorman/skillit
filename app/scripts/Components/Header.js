import React from 'react';
import { Link } from 'react-router';
import store from '../store';

export default React.createClass({
  render: function () {
    return (
      <header
        className="header"
      >
        <Link to='/MyProfile' className='navLink'>
             Welcome {store.sessionModel.get('username')}!
        </Link>
        <Link to='/Welcome' className='navLink'> Find A Swap </Link>
        <Link to='/EditMyProfile' className='navLink'> Edit My Profile </Link>

      </header>
    )
  }
});
