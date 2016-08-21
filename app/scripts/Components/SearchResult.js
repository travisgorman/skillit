import React from 'react';;
import $ from 'jquery';
import UserItem from './UserItem';
import store from '../store';
import users from '../yoosers';
import _ from 'underscore';

export default React.createClass({
  render: function() {
    let mySearchResults = this.state.users
      .map( (result, i) => {
        return (
          <UserItem
            key={i}
            userphoto={ result.userphoto }
            username={ result.username }
            location={ result.location }
            skills={ result.skills } />
        )
      });
      return (
          <div className="SearchResults">
            {mySearchResults}
          </div>
        )
  }
});
