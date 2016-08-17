import React from 'react';

import Header from './Header';
import UserModel from '../Models/UserModel';
import UserCollection from '../Collections/UserCollection';
import store from '../store';

export default React.createClass({
  componentDidMount: function () {
    console.log( 'store.session...', store.sessionModel.attributes );
    console.log( 'user...', store.userModel )

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
