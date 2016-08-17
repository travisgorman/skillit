import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    username: '',
    userphoto: 'http://i.imgur.com/c6PPaWT.png',
    location: '',
    links: [],
    skills: [],
    description: ''
  }
});
