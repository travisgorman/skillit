import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <header>
        <Link to='/myProfile'> My Profile </Link>
      </header>
    )
  }
});
