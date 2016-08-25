import React from 'react';
// import users from '../yoosers';
import Header from './Header';
import UserItem from './UserItem';
import _ from 'underscore';
import store from '../store';
import userCollection from '../Collections/UserCollection';

export default React.createClass({
  getInitialState () {
      return { users: store.userCollection.toJSON() }
      console.log(this.state.users);
  },
  componentDidMount: function () {
    store.userCollection.on( 'update change', this.updateState)
  },
  updateState: function () {
    this.setState({
      users: store.userCollection.toJSON()
    });
  },
  componendWillUnmount: function () {
    store.userCollection.off('update change', this.updateState)
  },
  submitHandler: function (e) {
    e.preventDefault();
    console.log( e );

    let searchLocation = this.refs.location.value;
    let searchSkill = this.refs.skills.value;

    store.userCollection.searchLocationAndSkill( searchLocation, searchSkill );

    // let searchResults = this.state.users;
    // store.userCollection.fetch({
    //   url: `https://baas.kinvey.com/user/kid_H1NgpLJ9`,
    //   success: function( response ){
    //     console.log( response );
    //   }
    // });


  //   let searchResults = this.state.users.filter( user => {
  //     return ( user.location === searchLocation
  //     && _.contains(userskills, searchSkill))
  // });
    // //
    // setTimeout( () => {
    //   this.setState( {users: searchResults} )
    //   console.log( 'here is your state, sir', this.state);
    //   console.log( 'these are your users, sir', this.state.users  );
    // }, 1000);
    //
},
    render() {
      let self = this.state;
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
          <div className="search">
              <form
                className="searchForm"
                onSubmit={this.submitHandler} >
                <input
                  type="text"
                  ref="skills"
                  className="searchThing"
                  placeholder="where?" />
                <input

                  type="text"
                  ref="location"
                  className="where?"
                  placeholder="searchPlace" />
                <input
                  type="submit"
                  value="search"
                  className="searchButton" />
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
