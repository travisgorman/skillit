import React from 'react';
import Header from './Header';
import UserItem from './UserItem';
import SearchForm from './SearchForm'
import Search from './Search';
import SearchResult from './SearchResult';

export default React.createClass({
  render: function () {
        return (
            <div className="welcomePage">
               <Header/>
               <Search/>
               <SearchResult/>
            </div>
           )
  }
});
