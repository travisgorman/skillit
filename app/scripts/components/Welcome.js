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

let searchBySkill = users.filter( (user) => {
  return _.contains( user.skills, searchSkill  )
});
// returns all users matching skill
// console.log( 'the users able to help you with '+ this.refs.skill.value + ' are ', searchBySkill );

let searchSkillAndLocation = users.filter( (user) => {
  return user.location === searchLocation && _.contains( user.skills, searchSkill )
});
// returns all users matching skill and location
console.log( searchSkillAndLocation );

let matchingUsers = searchSkillAndLocation
  .map( user => {
    return user.username
  });

console.log(
matchingUsers
);


  // get values from `location` and `skill` inputs

// // the purpose of this ajax request is to
// // get all the data from the userCollection (an array of User objects)
// // define it as an array called `results`
// // and assign that value  to the `results` property of its state object
// ...$.ajax({  });
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



// old: welcome component
// import React from 'react';
// import Header from './Header';
// import UserModel from '../Models/UserModel';
// import UserCollection from '../Collections/UserCollection';
// import store from '../store';
//
// export default React.createClass({
//
//   getInitialState: function () {
//     return {
//
//   }
//
//   },
//   componentDidMount: function () {
//
//     // search collection
//
//   },
//
//   submitHandler: function (e) {
//
//     e.preventDefault();
//     console.log(e);
//     console.log(this.state);
//
//   },
//   render: function() {
//
//     return (
//       <div>
//       <Header/>
//         Welcome!
//       <form
//         onSubmit={this.submitHandler} >
//
//         <input
//           type="text"
//           placeholder="location"
//           ref="searchLocation" />
//
//         <input
//           type="text"
//           placeholder="skills"
//           ref="searchSkills" />
//
//         <input
//           type="submit"
//           value="search" />
//
//       </form>
//       <main
//         className="searchResults" >
//
//
//       </main>
//       </div>
//     )
//   }
// });
