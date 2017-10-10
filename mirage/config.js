export default function() {

  this.get('https://www.googleapis.com/books/v1/volumes?q=isbn:9780393312836&key=AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ', function() {
    return {};
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

   this.urlPrefix = 'https://skookum-test-api.herokuapp.com';    // make this `http://localhost:8080`, for example, if your API is on a different server
   this.namespace = 'api/v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/books', (schema) => {
    return schema.books.all();
  });


//  this.get('/books', (schema) => {
//    return schema.books.all();
//  });


  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
