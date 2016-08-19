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
  render: function () {
    console.log( this.state );
    return (
            <div>
              <Header/>
              <div className="myProfile">

                <div className="photo">
                  <h3>user photo</h3>
                  <img
                    src={this.state.userphoto}
                    alt="user profile photo"/>
                </div>

                <div className="info">
                  <h3>User Info</h3>
                  <ul>
                    <li>{this.state.username}</li>
                    <li>{this.state.location}</li>
                    <li>{this.state.link}</li>
                  </ul>
                </div>
                <div className="Skills">
                  <h3>Skills</h3>
                  {this.state.skills}
                </div>
                <div className="description">
                  <h3>description</h3>
                  {this.state.description}
                </div>
              </div>
            </div>
    )
  }

});
