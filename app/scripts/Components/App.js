import React from 'react';
import Header from './Header';
import UserItem from './UserItem';
import Search from './Search';

export default React.createClass({
  render: function () {
        return (
            <div className="welcomePage">
               <Header/>
               <Search/>
            </div>
           )
  }
});
