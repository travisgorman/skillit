import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

import router from './router';
import store from './store';
import  settings from './settings';

$(document).ajaxSend(function(evt, xhr, jquerySettings){
  if (store.sessionModel.get('authtoken')) {
    xhr.setRequestHeader( 'Authorization', 'Kinvey ' + store.sessionModel.get('authtoken') );
  } else {
    xhr.setRequestHeader('Authorization', settings.basicAuth)
  }
console.log(settings);
});

ReactDOM.render(router, document.getElementById('page'));
