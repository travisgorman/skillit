import React from 'react';
import $ from 'jquery';
import store from '../store';
import Header from './Header';
import users from '../yoosers';
import _ from 'underscore';
import UserItem from './UserItem';
// import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default React.createClass({

  getInitialState: function () {
    return {}
  },
  render: function () {

        return (
            <div
              className="welcomePage">

              <Header/>
              <SearchResult/>

              </div>
           )
  }
});
