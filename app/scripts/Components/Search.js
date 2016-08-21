import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import users from '../yoosers';
import Header from './Header';
import UserItem from './UserItem';
import _ from 'underscore';

export default React.createClass({
  getInitialState () {
      return { users: [] }
  },
    submitHandler: function (e) {
      e.preventDefault();
      let searchLocation = this.refs.location.value;
      let searchSkill = this.refs.skill.value;
    // get users that match - return in an ob
      let search = users.filter( user => {
        return ( user.location === searchLocation
        && _.contains(user.skills, searchSkill))
    });
      console.log( '`search`..', search );
      console.log(this.state);
      //
      setTimeout( () => {
        this.setState( {users: search} )
        console.log( 'here is your state, sir', this.state);
        console.log( 'these are your users, sir', this.state.users  );
      },1000);
      //
  },
    render() {
      let self = this.state;
      console.log(this.state.users);
      console.log( self.users );
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
                <div className="SearchResults">
                  {mySearchResults}
                </div>
              </div>
        )
    }
});


    // let results = search.users.map( (user, i) => {
    //
    //   <UserItem
    //     key={i}
    //     username={this.props.username}
    //     userphoto={this.props.userphoto}
    //     location={this.props.location}
    //     description={this.props.description}
    //   />
    // });
    // this.setState({users: search}).save();
    // console.log(this.state);
