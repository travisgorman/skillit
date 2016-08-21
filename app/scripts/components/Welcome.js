import React from 'react';
import Header from './Header';
import UserItem from './UserItem';
import SearchForm from './SearchForm'
import Search from './Search';


export default React.createClass({
  render: function () {
        return (
            <div className="welcomePage">
               <Header/>
               <Search/>
               <UserItem/>
            </div>
           )
  }
});
