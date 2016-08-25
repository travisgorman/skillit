import Backbone from 'backbone';
import UserModel from '../Models/UserModel';


export default Backbone.Collection.extend({
  model: UserModel,
  url: 'https://baas.kinvey.com/user/kid_H1NgpLJ9',

  searchLocationAndSkill: function( searchLocation, searchSkill ){
      this.fetch({
        data: { query: JSON.stringify({
          location: searchLocation,
          skills: { $all:[
            searchSkill
          ]}
        })}
      })
}
});
