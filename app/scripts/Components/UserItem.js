import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      messageForm: false
    }
  },
  showMessageForm: function () {
    this.setState({
      messageForm: true
    });
  },
  sendHandler: function (e) {
      console.log(e);
  },
  render: function() {
    let messageForm;
    if ( this.state.messageForm ){
      messageForm = (
        <div className="messageForm">
          <input
            type="text"
            ref="subject"
            className="messageSubject"
            placeholder="Subject..."
          />
          <input
            type="textArea"
            ref="body"
            className="messageBody"
            placeholder="Message..."
          />
          <input type="submit"
            onClick={this.sendHandler } />
        </div>
    )
  }
    return (
      <div className="UserItemView">

        <div className="User_Item">
          <img className="avatar" src={this.props.userphoto} />
          <div className="user_info">
            <h1> {this.props.username} </h1>
            <h2> {this.props.location} </h2>
          </div>

          <div className="message_button"
                onClick={this.showMessageForm} >
            Message
          </div>
          {messageForm}
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
