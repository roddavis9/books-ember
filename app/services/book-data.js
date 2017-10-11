import Ember from 'ember';

let bookData;

export default Ember.Service.extend({

  init() {
    this._super(...arguments);


  },

  getBookData(bookNum) {
    //console.log('isbn from service', bookNum);
    const API_KEY = 'AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ';

    let bookInfoPath = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookNum + '&key=' + API_KEY;

    Ember.$.getJSON(bookInfoPath).then(function(data) {
      return bookData = data;
    });

    Ember.run.later((function() {
      return bookData;
    }), 2500);

  }

});
