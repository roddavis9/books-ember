import Ember from 'ember';

let bookList = [];
let bookOptionsArray = [];
let bookArray = [];
let booksModel;
let bookData = {};
const API_KEY = 'AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ';

export default Ember.Controller.extend({
  searchCriteria : null,
  bookList: null,
  selectedBook : null,
  columns: [
    {
      "title": "View Details",
      "template": "/custom/booklink"
    },
    {
      "propertyName": "title",
      "title": "Book Title"
    },
    {
      "propertyName": "author",
      "title": "Author",
      "sortedBy": "author"
    },
    {
      "propertyName": "year",
      "title": "Year"
    },
    {
      "propertyName": "isbn",
      "title": "ISBN"
    }

  ],


  init: function () {
    this._super(...arguments);
    this.set('searchCriteria', 'title');
    this.set('bookList', bookList);
    this.set('selectedBook', '');

    booksModel = Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books').then(function(data) {
      return bookList = data;

    });
    console.log(booksModel);

    this.createBookList();

  },


  bookSource : function(query, syncResults) {

    const regex = new RegExp(`.*${query}.*`, 'i');
    const results = bookArray.filter((item) => {
      return regex.test(item);
    });
//    console.log(results);
    syncResults(results);
  },
  createBookList() {
    Ember.run.later((function() {
      bookOptionsArray = bookList.data.map(item => (
          item.attributes
      ));

      bookList = Ember.A(bookOptionsArray);

      bookArray = bookList.map(item => (
        item.title
      ));

    }), 2500);
  },

  actions: {
    changeSearchCriteria: function(value) {
      this.set('searchCriteria', value);
      bookArray = bookList.map(item => (
        item[value]
      ));

    },
    getBookData() {

    },
    updateSelected: function(selectedValue) {
      // this.set('selectedBook', selectedValue);
      var currentSearchCriteria = this.get('searchCriteria');

      console.log(currentSearchCriteria);

      let bookISBN = bookList.find(function (book) {
        //console.log('selectedValue ', selectedValue, 'book ', currentSearchCriteria);
        return selectedValue === book[currentSearchCriteria];
      });

      console.log('isbn', bookISBN);
      console.log(selectedValue);

      let bookInfoPath = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookISBN.isbn + '&key=' + API_KEY;

      console.log(bookInfoPath);


      Ember.$.getJSON(bookInfoPath).then(function(data) {
        return bookData = data;

      });
    }
  }

});
