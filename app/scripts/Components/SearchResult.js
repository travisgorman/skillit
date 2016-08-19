import React from 'react';
import $ from 'jquery';
import UserItem from './UserItem';
import store from '../store';
import users from '../yoosers';

export default React.createClass({
  getInitialState: function () {
    return { results: [] }
  },
  submitHandler: function (e) {
    // handle search form submit
    // console logs to see what's what...
    e.preventDefault();
    console.log('event...', e );
    console.log( 'state...' this.state );
    console.log( 'users'  users);

    let usernames = users.map( (user) => {
      return user.username;
    });
    
    console.log( 'usernames' usernames);
  // ok go
  // get values from `location` and `skill` inputs

//     let searchLocation = this.refs.location.value;
//     let searchSkill = this.refs.skill.value;
//
// // the purpose of this ajax request is to
// // get all the data from the userCollection (an array of User objects)
// // define it as an array called `results`
// // and assign that value  to the `results` property of its state object
//
//     $.ajax({
//         url: `https://baas.kinvey.com/user/kid_H1NgpLJ9`
//
//       // url: `https://api.spotify.com/v1/search`,
//       // data: {q: searchQuery, type: 'artist'},
//
//       success: ( /* data */ ) => {
//
// // where exactly in the array do I get a user?
// // define that endpoint as `results`
//
//         let results = ???
//
// // set state to `results`
//         this.setState({
//           results: results
//         });
//
//       }
//     });
},
render: function () {

// define `mySearchResults` - as the array of UserItems

  let mySearchResults = this.state.results
    .map( (result, i) => {
      return (
        <UserItem
          key={i}
          userphoto={ this.state.results.userphoto }
          username={ this.state.results.username }
          location={ this.state.results.location }
          link={ this.state.results.link }
          skills={ this.state.results.skills }
          description={ this.state.results.description }
        />
      )
    });

  // return search <form> and <main>
  return (

            <div className="searchResults">
              <form>
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
                {mySearchResults}
              </main>
            </div>

      )
  }
});
