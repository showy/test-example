import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hotels', function() {
    this.route('hotel', { path: ':hotel_id' }, function() {
      this.route('room', { path: ':room_id' } );
    });
  });
});

export default Router;
