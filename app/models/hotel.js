import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr('string'),
  priority: attr('number'),
  description: attr('string'),
  isPreferential: attr('boolean'),
  rooms: hasMany('room', { inverse: null, async: false } ),
});
