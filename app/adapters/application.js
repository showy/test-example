import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: ENV.APP.apiNameSpace,
  host: ENV.APP.apiHost
});
