import React from 'react';


export default React.createClass({
  getInitialState: function() {
    return {

    }
  },
  componentWillMount: function() {
    // hmmm??
  },

  render: function() {


    return (
      <div className="userItem">
        <div className="userPhoto">
          <img src={this.props.userphoto} alt="users profile image"/>
        </div>
        <div className="userInfo">
          <h3>{this.props.username}</h3>
          <h3>{this.props.location}</h3>
          <h4>{this.props.link}</h4>
        </div>
        <div className="userSkills">
          <p>{this.props.skills}</p>
        </div>
        <div className="userBio">
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }

});
