import React from 'react';
import users from '../yoosers';
import _ from 'underscore';

export default React.createClass({
  getInitialState: function () {
    return {  }
  },
  submitHandler: function (e) {
    e.preventDefault();
    let searchLocation = this.refs.location.value;
    let searchSkill = this.refs.skill.value;

    let searchSkillAndLocation = users.filter( user => {
      return user.location === searchLocation
        && _.contains( user.skills, searchSkill )
    });
    //and array of matching user objects
    console.log(searchSkillAndLocation);
    //set to this.state.myUsers
    this.setState({myUsers: searchSkillAndLocation})
    console.log(this.state.myUsers);
  },
  render: function() {
    return (
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
    )
  }
});
