import Backbone from 'backbone';

const UserModel = Backbone.Model.extend({
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

export default UserModel;
