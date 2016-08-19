import React from 'react';
import $ from 'jquery';
import store from '../store';
import Header from './Header';
import users from '../yoosers';
import _ from 'underscore';

export default React.createClass({
  getInitialState: function () {
    return { results: [] }
  },
  submitHandler: function (e) {
    // handle search form submit
    // console logs to see what's what...
    e.preventDefault();
    // console.log( 'all users...',  users );

    let searchLocation = this.refs.location.value;
    let searchSkill = this.refs.skill.value;
    // input search values
    let searchSkillAndLocation = users.filter( (user) => {
      return user.location === searchLocation
        && _.contains( user.skills, searchSkill )
    });
    // returns an array containing all matching users (the whole user object)
    // TODO: make search more flexible. more complex search capability
    // TODO: (city only instead of city and state, accepts one field only, ignore case, etc )

  let matchingUsers = searchSkillAndLocation
    .map( user => {
      return user.username
  });
  // returns an array containing the names of all matching users
let userMatchInfo;
  if (matchingUsers.length === 1){
  userMatchInfo = `There is ${matchingUsers.length} user in ${searchLocation} who can help you with ${searchSkill}.`} else { userMatchInfo = `There are ${matchingUsers.length} users in ${searchLocation} who can help you with ${searchSkill}.`
}
  console.log( userMatchInfo, searchSkillAndLocation );
//  how many, of what and where?
  console.log( matchingUsers );
//  logs an array of the names of all returned users
console.log( store.sessionModel.get( 'username' ));
},

render: function () {

console.log( store.sessionModel.get( 'username' ));
  //     return (
  //       <UserItem
  //         key={i}
  //         userphoto={ this.state.results.userphoto }
  //         username={ this.state.results.username }
  //         location={ this.state.results.location }
  //         link={ this.state.results.link }
  //         skills={ this.state.results.skills }
  //         description={ this.state.results.description }
  //       />
  //     )
  // });


  return (
            <div className="searchResults">
              <Header/>
              <h3>  Welcome {store.sessionModel.get('username')}! </h3>
              <form
                onSubmit={this.submitHandler}
              >
                <input
                  type="text"
                  ref="location"
                  placeholder="location"
                />
                <input
                  type="text"
                  ref="skill"
                  placeholder="skill"
                />
                <input
                  type="submit"
                  value="search"
                  id="searchButton"
                />
              </form>
              <main>
                {/* {mySearchResults} */}
              </main>
            </div>

      )
  }
});
