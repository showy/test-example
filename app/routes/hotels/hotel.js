import Ember from 'ember';

export default Ember.Route.extend({
  model(path) {
    return this.store.findRecord('hotel', path.hotel_id);
  },
});
