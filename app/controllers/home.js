import Ember from 'ember';


let bookList = [];
let bookArray = [];
let bookData = {};


export default Ember.Controller.extend({
  bookData: Ember.inject.service(),
  searchCriteria : null,
  bookList: null,
  selectedBook : null,
// detail variables
  detailAuthor: '',
  detailTitle: '',
  detailDescription: '',
  detailCover: '',
  detailISBN: '',
  detailYear: '',
  columns: [
    {
      "template": "",
      "title": "View Details"
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

    Ember.$.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books').then(function(data) {
      return bookList = data;
    });

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
      bookList = Ember.A(bookList);
      bookArray = bookList.map(item => (
        item.title
      ));

    }), 2500);
  },
  showModal: false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('showModal');
    },
    changeSearchCriteria: function(value) {
      this.set('searchCriteria', value);
      bookArray = bookList.map(item => (
        item[value]
      ));

    },
    updateSelected: function(selectedValue) {
      const self = this;

      var currentSearchCriteria = this.get('searchCriteria');

      let bookISBN = bookList.find(function (book) {
        //console.log('selectedValue ', selectedValue, 'book ', currentSearchCriteria);
        return selectedValue === book[currentSearchCriteria];
      });

      //console.log('isbn', bookISBN);
      //console.log(selectedValue);

      //let displayedBookData = this.get('bookData').getBookData(bookISBN.isbn);
      const API_KEY = 'AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ';

      let bookInfoPath = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookISBN.isbn + '&key=' + API_KEY;

      Ember.$.getJSON(bookInfoPath).then(function(data) {
        return bookData = data;
      });

      Ember.run.later((function() {
        console.log('bookData', bookData);

        // set variables for book details
        // TODO: this is an array so loop through and get all. Now just displaying first
        self.set('detailAuthor', bookData.items[0].volumeInfo.authors[0]);

        self.set('detailTitle', bookData.items[0].volumeInfo.title);
        self.set('detailDescription', bookData.items[0].volumeInfo.description);
        self.set('detailCover', bookData.items[0].volumeInfo.imageLinks.thumbnail);
        self.set('detailISBN', bookISBN.isbn);
        self.set('detailDate', bookData.items[0].volumeInfo.publishedDate);
        self.set('detailDescription', bookData.items[0].volumeInfo.description);

      }), 1000);

      this.set('showModal', true);

    }
  }

});
