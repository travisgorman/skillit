import React from 'react';
import $ from 'jquery';
import store from '../store';
import Header from './Header';
import users from '../yoosers';
import _ from 'underscore';
import UserItem from './UserItem';

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
//   submitHandler: function (e) {
//     e.preventDefault();
//     let searchLocation = this.refs.location.value;
//     let searchSkill = this.refs.skill.value;
//     let searchSkillAndLocation = users.filter( (user) => {
//       return user.location === searchLocation
//         && _.contains( user.skills, searchSkill )
//     }); // returns an array containing all matching users (the whole user object)
//
//
//     let matchingUsers = searchSkillAndLocation
//       .map( user => {
//         return user.username
//     }); // returns an array containing the names of all matching users
//
//     let userMatchInfo;
//     if (matchingUsers.length === 1){
//     userMatchInfo = `There is ${matchingUsers.length} user in ${searchLocation} who can help you with ${searchSkill}.`} else { userMatchInfo = `There are ${matchingUsers.length} users in ${searchLocation} who can help you with ${searchSkill}.`
//     }
//   console.log( userMatchInfo, searchSkillAndLocation );
//     //  how many, of what and where?
//   console.log( matchingUsers );
//     //  logs an array of the names of all returned users
// },

render: function () {

  // console.log(this.state.users);

    let mySearchResults2 = this.state.users
      .forEach( user => {
        let userSkills = '';
        return user.skills
           .forEach( skill => {
              userSkills += skill + `, `;
              return userSkills;
            })
        });
            //   if ( !i === user.skills.length -1 ) {
            //   userSkills += `${skill}, `
            // } else {
            //   userSkills += `${skill}, etc...`
            // }

console.log(mySearchResults2);
    // console.log(user.skills);

  return (
            <div
            className="welcomePage"
            >
                <Header/>
                <form
                  className="searchForm"
                  onSubmit={this.submitHandler} >
                  <input
                    type="text"
                    ref="location"
                    className="searchLocation"
                    placeholder="location" />
                  <input
                    type="text"
                    ref="skill"
                    className="searchSkill"
                    placeholder="skill" />
                  <input
                    type="submit"
                    value="search"
                    id="searchButton" />
                </form>

                <main
                  className="page" >
                  {/* {mySearchResults} */}
                </main>
              </div>
           )
       }
   });
  // let mySearchResults = this.state.users.map( (user, i) => {
  //
  //   console.log( user.skills[0], user.skills[1], user.skills[2] );
  //   return (
  //
  //     <UserItem
  //       key={i}
  //       userphoto={user.userphoto}
  //       username={user.username}
  //       location={user.location}
  //       skills={ user.skills[0] }
  //     />
  //
  //   )
  // });
