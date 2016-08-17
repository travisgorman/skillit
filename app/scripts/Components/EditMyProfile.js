import React from 'react';
import store from '../store';
import Header from './Header';

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
  submitHandler: function () {

  },
  render: function () {
    console.log(this.state );
    return (
      <form className="myProfile">
        <fieldset className="red">
          <img
            src="http://i.imgur.com/c6PPaWT.png"
            alt="user profile photo"/>
        </fieldset>
        <fieldset className="green">
          <h3>User Info</h3>
          <ul>
            <li>
            <input
              ref="location"
              type="text"
              defaultValue={this.state.location}
              placeholder="location" />
            </li>
            <li>
            <input
              ref="link"
              type="text"
              defaultValue={this.state.link}
              placeholder="social media link" />
            </li>
          </ul>
        </fieldset>
        <fieldset className="yellow">
          <h3>Skills</h3>
          <input
            ref="skills"
            type="text"
            defaultValue={this.state.skills}
            placeholder="skills" />
        </fieldset>
        <fieldset className="blue">
          <h3>Description</h3>
          <input
            ref="description"
            type="textarea"
            defaultValue={this.state.description}
            placeholder="description/bio" />
            <input
              ref="submit"
              type="submit"
              value="save" />
        </fieldset>
      </form>
    )
  }

});
