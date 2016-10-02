import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(model, room, prop) {
    // Not checking if Id exists. Relying on backend for now :P
    room.id = room.rates[0].rateToken;
    
    return this._super(model, room, prop);
  }
});
