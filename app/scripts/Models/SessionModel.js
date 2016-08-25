import Backbone from 'backbone';
import $ from 'jquery';
import store from '../store';
import settings from '../settings';

export default Backbone.Model.extend({
  urlRoot:`https://baas.kinvey.com/user{settings.appKey}`,
  idAttribute: '_id',
  defaults: {
    userphoto: 'http://i.imgur.com/c6PPaWT.png',
    skills: []
  },
  parse: function( response ) {
   if ( response ) {
     return {
      _id: response._id,
      username: response.username,
      authtoken: response._kmd.authtoken,
      userphoto: response.userphoto,
      location: response.location,
      link: response.link,
      skills: response.skills,
      description: response.description
     };
   }
 },

  login: function(data){
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/kid_H1NgpLJ9/login`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: (s) => {
        this.set( this.parse(s) );
        localStorage.setItem('authtoken', s._kmd.authtoken);
        this.unset('password');
        // this.trigger('change update');
      }
    });
  },
///
  //
  // login: function(username, password) {
  //   // let newUsername = username.toLowerCase();
  //   this.save(
  //     { username: newUsername, password: password},
  //     { url: `https://baas.kinvey.com/user/kid_SkBnla5Y/login`,
  //       success: (model, response) => {
  //         localStorage.setItem('authtoken', response._kmd.authtoken);
  //         this.unset('password');
  //         this.trigger('change update');
  //
  //         console.log('USER SIGNED IN', newUsername);
  //     },
  //      error: function(model, response) {
  //        throw new Error('LOGIN FAILED');
  //     },
  //   });
  // },

  // signup: function(username, password) {
  //   let newUsername = username.toLowerCase();
  //   this.save({
  //     username: newUsername,
  //     password: password,
  //   },
  //   {
  //     url: `https://baas.kinvey.com/user/kid_SkBnla5Y/`,
  //     success: (model, response) => {
  //       localStorage.removeItem('authtoken');
  //       localStorage.setItem('authtoken', response._kmd.authtoken);
  //       this.unset('password');
  //       // this.unset('auth');
  //       this.trigger('change update');

  //       console.log('USER SIGNED UP!', newUsername);
  //     },
  //     error: function(model, response) {
  //       throw new Error('FAILED TO SIGN UP');
  //     },
  //   });
  // },

  signup: function(data) {
    console.log(data);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/kid_H1NgpLJ9`,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: (s) =>{

        this.set( this.parse( s ) );
        localStorage.setItem( 'authtoken', s._kmd.authtoken );
        this.unset( 'password' );

      }
    });
  }
  //   retrieve: function() {
  //   this.fetch({
  //     url: `https://baas.kinvey.com/user/kid_SkBnla5Y/_me`,
  //     success: (model, response) => {
  //         this.trigger('change');

  //         console.log('USER RETRIEVED: this ', this);
  //     },
  //     error: function(response) {
  //       throw new Error('COULD NOT FETCH USER!');
  //     },
  //   });
  // }

});
