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
    // let searchBySkill = users.filter( (user) => {
    //   return _.contains( user.skills, searchSkill  )
    // });
// returns all users matching skill

  let searchSkillAndLocation = users.filter( (user) => {
    return user.location === searchLocation && _.contains( user.skills, searchSkill )
  });
  // returns all users matching skill and location


  console.log( 'matching users in ', searchLocation ,  searchSkillAndLocation );
let matchingNames = "";
  let matchingUsers = searchSkillAndLocation
    .map( user => {
      return user.username
    });

  console.log( matchingUsers );

},

render: function () {

  // let searchLocation = this.refs.location.value;
  // let searchSkill = this.refs.skill.value;
  //
  // let searchSkillAndLocation = users.filter( (user) => {
  //   return user.location === searchLocation && _.contains( user.skills, searchSkill )
  // });

// define `mySearchResults` - as the array of UserItems

  // let mySearchResults = searchSkillAndLocation
  //   .map( (result, i) => {
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


  // return search <form> and <main>
  return (

            <div className="searchResults">
              <Header/>
                Welcome!
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
