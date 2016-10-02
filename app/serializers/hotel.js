import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    let hotels = [];
    let rooms = [];

    payload.hotels.forEach( (hotel) => {

      let roomsId = [];

      hotel.rooms.forEach( (room) => {
        // Assume ID exists on rateToken
        room.id = room.rates[0].rateToken;
        roomsId.addObject(room.id);
        rooms.addObject(room);
      });

      hotel.rooms = roomsId;
      hotels.addObject(hotel);

    });

    payload.hotels = hotels;
    payload.rooms = rooms;

    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});