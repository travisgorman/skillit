import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  url: `https://baas.kinvey.com/user/kid_H1NgpLJ9`,
  defaults: {
    username: '',
    userphoto: 'http://i.imgur.com/c6PPaWT.png',
    location: '',
    links: [],
    skills: [],
    description: ''
  }
});
