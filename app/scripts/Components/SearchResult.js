import React from 'react';
import $ from 'jquery';
import UserItem from './UserItem';
import store from '../store';
import users from '../yoosers';
import _ from 'underscore';

export default React.createClass({
  submitHandler: function (e) {
    console.log(e);
    e.preventDefault();
    let searchLocation = this.refs.location.value;
    let searchSkill = this.refs.skill.value;
    let search = users.filter( user => {
        return user.location === searchLocation
          && _.contains( user.skills, searchSkill )
      });
  },
  render: function() {
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
            description={ result.description } />
        )
      });
  return (
          <div className="Search">
            <form
                className="searchForm"
                onSubmit={this.submitHandler} >
              <input
                type="text"
                ref="location"
                className="searchLocation"
                placeholder="location" />
              <input
                type="text"
                ref="skill"
                className="searchSkill"
                placeholder="skill" />
              <input
                type="submit"
                value="search"
                id="searchButton" />
            </form>
              <div className="results">
              {mySearchResults}
              </div>
          </div>
        )
  }
});
