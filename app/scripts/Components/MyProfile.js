import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState: function () {
    return  store.sessionModel.toJSON();
  },
  componentDidMount: function () {
    store.sessionModel.on('change', this.updateState);
  },
  componentWillUnmount: function () {
    store.sessionModel.off('change', this.updateState);
  },
  updateState: function () {
    this.setState(store.sessionModel.toJSON());
  },
  render: function () {
    console.log(this.state );
    return (
      <div className="myProfile">
        <div className="red">
          <h3>user photo</h3>
          <img
            src="http://i.imgur.com/c6PPaWT.png"
            alt="user profile photo"/>
        </div>
        <div className="green">
          <h3>user info</h3>
          <ul>
            <li>{this.state.username}</li>
            <li>{this.state.location}</li>
            <li>{this.state.link}</li>
          </ul>
        </div>
        <div className="yellow">
          <h3>skills</h3>
          <ul>
            <li>Cooking</li>
            <li>Sloth Wrangling</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="blue">
          <h3>description</h3>
          I'm an amateur sloth wrangler who's learning JavaScript
        </div>
      </div>
    )
  }

});
