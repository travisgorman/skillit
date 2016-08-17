
import Backbone from 'backbone';
import settings from '../settings';
import $ from 'jquery';

export default Backbone.Model.extend({
  urlRoot:'/user',
  idAttribute: '_id',
  defaults: {
    userphoto: 'http://i.imgur.com/c6PPaWT.png',
    skills: []
  },
  parse: function( response ) {
   if ( response ) {
     return {
      username: response.username,
      response: response._Id,
      authtoken: response._kmd.authtoken,
      userphoto: response.userphoto,
      location: response.location,
      links: response.links,
      skills: response.skills,
      description: response.description
     };
   }
 },

  login: function(data){
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/${settings.appKey}/login`,
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
      url: `https://baas.kinvey.com/user/${settings.appKey}`,
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
