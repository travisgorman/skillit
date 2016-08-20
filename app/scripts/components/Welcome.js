import React from 'react';
import $ from 'jquery';
import store from '../store';
import Header from './Header';
import users from '../yoosers';
import _ from 'underscore';
import UserItem from './UserItem';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default React.createClass({
  render: function () {
        return (
            <div
              className="welcomePage">

              <Header/>
              <SearchResult/>

              </div>
           )
  }
});

  // console.log(this.state.users);
  // let mySearchResults2 = this.state.users
  //   .forEach( user => {
  //     let userSkills = '';
  //     return user.skills
  //        .forEach( skill => {
  //           userSkills += skill + `, `;
  //           return userSkills;
  //         })
  //     });
  //   let mySearchResults = this.state.users.filter( user => {
  //     user
  //   })
  //   if ( !i === user.skills.length -1 ) {
  //   userSkills += `${skill}, `
  // } else {
  //   userSkills += `${skill}, etc...`
  // }
  // console.log(user.skills);



  // let mySearchResults = this.state.users.map( (user, i) => {
  //
  //   console.log( user.skills[0], user.skills[1], user.skills[2] );
  //   return (
  //
  //     <UserItem
  //       key={i}
  //       userphoto={user.userphoto}
  //       username={user.username}
  //       location={user.location}
  //       skills={ user.skills[0] }
  //     />
  //
  //   )
  // });
