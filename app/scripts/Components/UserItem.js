import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      users: [
        {
          "_id": "57b33b1309f5c5bb3a4bf42c",
          "username": "Ricky Frockrocket",
          "verifyPassword": "password",
          "location": "Austin, TX",
          "link": "facebook.com/rickyfrockrocket",
          "skills": [
            "HTML",
            "CSS",
            "javascript"
          ],
          "description": "i don't play the flute at all, but I wouldn't mind learning how",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b33b1309f5c5bb3a4bf42c"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:00:23.710Z",
            "ect": "2016-08-16T16:10:59.664Z"
          }
        },
        {
          "_id": "57b3a4d8b0db14844e72ae5a",
          "username": "Pearl McSwirl",
          "verifyPassword": "",
          "location": "Austin, TX",
          "link": "youtube.com/pearmcswirl",
          "skills": [
            "Guitar",
            "flute",
            "Piano"
          ],
          "description": "I'm Pearl, and I'm here to learn how to more accurately toot a flute",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b3a4d8b0db14844e72ae5a"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:08:25.662Z",
            "ect": "2016-08-16T23:42:16.494Z"
          }
        },
        {
          "_id": "57b3b5370f4309e828675f78",
          "username": "Wizard O'Toole",
          "verifyPassword": "password",
          "location": "Austin, TX",
          "link": "@wizardTeeth",
          "skills": [
            "HTML",
            "CSS",
            "javascript"
          ],
          "description": "I'm wizardteeth, and I juggle squirrels. If you want to juggle squirrels too, get at me",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b3b5370f4309e828675f78"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:08:53.566Z",
            "ect": "2016-08-17T00:52:07.154Z"
          }
        },
        {
          "_id": "57b3b63b6410c69e56eda986",
          "username": "Snarky Malarky",
          "verifyPassword": "password",
          "location": "Austin, TX",
          "link": "facebook.com/snarkymalarky",
          "skills": [
            "HTML",
            "CSS",
            "javascript"
          ],
          "description": "I'm snarky. I'm not amazing at the flute or anything, but i'm pretty good. ",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b3b63b6410c69e56eda986"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:00:33.234Z",
            "ect": "2016-08-17T00:56:27.743Z"
          }
        },
        {
          "_id": "57b49034d80f004821e07da4",
          "username": "Lester Scrumpkin",
          "verifyPassword": "password",
          "location": "Austin, TX",
          "link": "facebook.com/misterscrump",
          "skills": [
            "Guitar",
            "flute",
            "Piano"
          ],
          "description": "I'm an amateur sloth wrangler who's learning JavaScript",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b49034d80f004821e07da4"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:01:46.495Z",
            "ect": "2016-08-17T16:26:28.383Z"
          }
        },
        {
          "_id": "57b338670f4309e828659c97",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "skills": [
            "Viola",
            "Violin",
            "flute"
          ],
          "username": "icabod",
          "authtoken": "1478c6bf-0267-4946-864f-85c47fee6a0c.Ek/yo2BFCvamU74/4DvOlBsiINl1Ywwr6z/mHVUQKxk=",
          "location": "Houston, TX",
          "link": "facebook.com/icabod",
          "description": "i play an even meaner flute than travis",
          "_acl": {
            "creator": "57b338670f4309e828659c97"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:01:36.902Z",
            "ect": "2016-08-16T15:59:35.178Z"
          }
        },
        {
          "_id": "57b4c48d664f84bb272f7bcf",
          "username": "Jesko Etzler",
          "verifyPassword": "password",
          "location": "Austin, TX",
          "link": "facebook.com",
          "skills": [
            "spanish",
            "French",
            "German"
          ],
          "description": "I'm Jesko. Let's get down to business.",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b4c48d664f84bb272f7bcf"
          },
          "_kmd": {
            "lmt": "2016-08-19T12:56:22.643Z",
            "ect": "2016-08-17T20:09:49.440Z"
          }
        },
        {
          "_id": "57b703e4b3240e3b212b1936",
          "username": "Lemony Snicket",
          "verifyPassword": "password",
          "location": "Houston, TX",
          "link": "linkedin.com/lemonysnicket",
          "skills": [
            "spanish",
            "French",
            "German"
          ],
          "description": "I'm Lemony Snicket, but that's mister snicket to you",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b703e4b3240e3b212b1936"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:08:33.440Z",
            "ect": "2016-08-19T13:04:36.078Z"
          }
        },
        {
          "_id": "57b704b23d99caa4491bd11d",
          "username": "Jekatrina Goncarova",
          "verifyPassword": "password",
          "location": "Houston, TX",
          "link": "none",
          "skills": [
            "HTML",
            "CSS",
            "javascript"
          ],
          "description": "I'm a Latvian international business student learning web design",
          "userphoto": "http://i.imgur.com/c6PPaWT.png",
          "_acl": {
            "creator": "57b704b23d99caa4491bd11d"
          },
          "_kmd": {
            "lmt": "2016-08-19T13:09:19.850Z",
            "ect": "2016-08-19T13:08:02.313Z"
          }
        }
    ]
    }
  },
  render: function() {
    // console.log(this.state.users);
    
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
