import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {}
  },
  render: function() {
    // console.log(this.state.users);
    
    return (
      <div className="UserItem">
          <img className="userPhoto" src={this.props.userphoto} />
          <div className="userInfo">
            <h1> {this.props.username} </h1>
            <h2> {this.props.location} </h2>
          </div>
          <div className="messageButton">
            Message
          </div>
      </div>
    )
  }
});
