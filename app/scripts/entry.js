import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

import router from './router';
import settings from './settings';
import store from './store';


$(document).ajaxSend(function(evt, xhr, jquerySettings){
  if (store.session.get('authtoken')) {

  }
  xhr.setRequestHeader('Authorization', settings.basicAuth)

});

ReactDOM.render(router, document.getElementById('page'));
