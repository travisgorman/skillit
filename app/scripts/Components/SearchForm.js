import React from 'react';;
import $ from 'jquery';
import UserItem from './UserItem';
import store from '../store';
import users from '../yoosers';
import _ from 'underscore';
import SearchInput , {createFilter} from 'react-search-input';

export default React.createClass({
getInitialState: function() {
  return {};
},
updateState: function() {
  this.setState(store.session.toJSON());
},
  componentDidMount: function() {
    store.session.on('change', this.updateState);
  },
  componentWillUnmount: function() {
    store.session.off('change', this.updateState);
  },
  submitHandler: function (e) {
    e.preventDefault();
    let searchLocation = this.refs.location.value;
    let searchSkill = this.refs.skill.value;
    let search = users.filter( user => {
      return ( user.location === searchLocation
      && _.contains(user.skills, searchSkills))
    });
    let results = search.users.map( (user, i) => {

      <UserItem
        key={i}
        username={this.props.username}
        userphoto={this.props.userphoto}
        location={this.props.location}
        description={this.props.description}
      />
    });
    // this.setState({users: search}).save();
    // console.log(this.state);
  },
  render: function (){
    return (
        <div className="results">

        {results}

        </div>
    )
  }
});
