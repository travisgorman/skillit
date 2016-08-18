import React from 'react';
import Header from './Header';
import UserModel from '../Models/UserModel';
import UserCollection from '../Collections/UserCollection';
import store from '../store';

export default React.createClass({
  getInitialState: function () {
    return {

    }
  },
  componentDidMount: function () {
    // search collection
  },
  submitHandler: function (e) {
    e.preventDefault();
    console.log(e);
  },
  render: function() {
    return (
      <div>
      <Header/>
        Welcome!
      <form
        onSubmit={this.submitHandler} >

        <input
          type="text"
          placeholder="location"
          ref="searchLocation" />

        <input
          type="text"
          placeholder="skills"
          ref="searchSkills" />

        <input
          type="submit"
          value="search" />

      </form>
      <main
        className="searchResults" >
        

      </main>
      </div>
    )
  }
});
