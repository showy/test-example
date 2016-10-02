import Ember from 'ember';

export default Ember.Route.extend({
  model(path) {
    // This is here because of previous bad logic. Didn't bother to change
    // But im just peeking to not touch the adapter
    return this.store.peekRecord('room', path.room_id);
  },

  actions: {
    buy(room) {
      // Buys is a get method to controller
      this.store.findRecord('room', room.rateToken ).then(
        () => alert('Buy confirmed'),
        () => alert('Payment gw error'),
      );
    }
  }
});
