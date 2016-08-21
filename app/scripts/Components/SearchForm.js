import React from 'react';
import users from '../yoosers';
import _ from 'underscore';

export default React.createClass({
  getInitialState: function () {
    return {users: users}
  },
  submitHandler: function (e) {
    e.preventDefault();
    
    let searchLocation = this.refs.location.value;
    let searchSkill = this.refs.skill.value;

    let search = users.filter( user => {
        return user.location === searchLocation
          && _.contains( user.skills, searchSkill )
      });
    // setTimeout(  ()=> {
    //   this.setState({match: search});
    //   console.log(this.state.match);
    // },2000);
  },
  render: function() {

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

            </div>
          </div>
    )
  }
});
