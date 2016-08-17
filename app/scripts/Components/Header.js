import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <header>
        <Link to='/MyProfile'> My Profile </Link>
        <Link to='/EditMyProfile'> Edit My Profile </Link>
      </header>
    )
  }
});
