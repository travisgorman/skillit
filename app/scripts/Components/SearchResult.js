import React from 'react';
import $ from 'jquery';
import UserItem from './UserItem';
import store from '../store';
import users from '../yoosers';

export default React.createClass({
  render: function () {
  // define `mySearchResults` - as the array of UserItems
    let mySearchResults = users
      .map( (result, i) => {
        return (
          <UserItem
            key={i}
            userphoto={ result.userphoto }
            username={ result.username }
            location={ result.location }
            link={ result.link }
            skills={ result.skills }
            description={ result.description }
          />
        )
      });
    // return search <form> and <main>
    return (
              <div className="searchResults">
                  {mySearchResults}
              </div>
        )
    }
});
