import Backbone from 'backbone';
import messageModel from '../store';

export default Backbone.Model.extend({
  url: `https://baas.kinvey.com/appdata/kid_H1NgpLJ9/MessageCollection`,
  model: messageModel,

});
