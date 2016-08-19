
import Backbone from 'backbone';
import $ from 'jquery';
import store from '../store';
import settings from '../settings';

export default Backbone.Model.extend({
  urlRoot:`https://baas.kinvey.com/user/kid_H1NgpLJ9`,
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
});
