import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://skookum-test-api.herokuapp.com',
  namespace: 'api/v1'
});
