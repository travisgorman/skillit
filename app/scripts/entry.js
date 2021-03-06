import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import users from './yoosers';
import router from './router';
import store from './store';
import  settings from './settings';


$(document).ajaxSend(function(evt, xhr, jquerySettings){
  if ( localStorage.getItem( 'authtoken' )) {
    xhr.setRequestHeader( 'Authorization', 'Kinvey ' + localStorage.getItem('authtoken') );
  } else {
    xhr.setRequestHeader('Authorization', settings.basicAuth)
  }
});


ReactDOM.render(router, document.getElementById('page'));
