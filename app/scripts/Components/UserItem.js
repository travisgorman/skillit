import React from 'react';

export default React.createClass({

  render: function() {

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
//

//
// export default React.createClass({
//   render (){
//     <div className="searchContainer">
//       <header className="header">
//         <h1 className="brand">Swap</h1>
//         <input className='searchInput'
//         type="text"
//         placeholder='Search'/>
//       </header>
//       <div className="results">
//
//       {let results = search.users.map( (user, i) => {
//
//         <UserItem
//           key={i}
//           username={this.props.username}
//           userphoto={this.props.userphoto}
//           location={this.props.location}
//           description={this.props.description}
//         />
//
//       })}
//
//       {results}
//
//       </div>
//     </div>
//   }
// });
