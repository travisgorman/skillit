import React from 'react';
import Header from './Header';
import user from '../models/user';
import store from '../store';
import users from '../collections/users';

export default React.createClass({
  componentDidMount: function () {
    console.log( 'store.session...', store.session.attributes);
    console.log( 'user...', user)
    // user.fetch();
    // user.get('location')
  },
  render: function() {
    return (
      <div>
      <Header/>
      {this.props.children}
        Welcome!
      </div>
    )
  }
});
