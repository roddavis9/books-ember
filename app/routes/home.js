import Ember from 'ember';

export default Ember.Route.extend({


  model: function() {

    return this.get('store').findAll('book');




    /*
    let ObjectPromiseProxy = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

    let proxy = ObjectPromiseProxy.create({
      promise: Ember.RSVP.resolve(Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books'))
    });

    proxy.then(function(json){
      // the json
      return json

    }, function(reason) {
      // the reason why you have no json
      console.log(reason);
    });
    */




    //return Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books').then(function(data) {
    //  return data;
    //})

  }


});
