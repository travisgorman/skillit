import Backbone from 'backbone';


export default Backbone.Model.extend({
  "idAttribute" : `_id`,
    defaults: {
      sender: '',
      recipient: '',
      subject: '',
      body: '',
    },
});
