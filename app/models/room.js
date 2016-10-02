import DS from 'ember-data';
import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  // hotel: belongsTo('hotel'),
  name: attr('string'),
  category: attr('string'),
  group: attr('string'),
  meanPlan: attr('string'),
  rates: attr()
});
