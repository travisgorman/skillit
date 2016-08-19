import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <header>
        <Link to='/MyProfile' className='navLink'> My Profile </Link>
        <Link to='/EditMyProfile' className='navLink'> Edit My Profile </Link>
        <Link to='/welcome' className='navLink'> Find A Swap </Link>
      </header>
    )
  }
});
