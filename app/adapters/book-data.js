import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://www.googleapis.com/books',
  namespace: 'v1/volumes'
});
// https://www.googleapis.com/books/v1/volumes?q=isbn:9780393312836&key=AIzaSyDy2qNUaUwGP4okrPnaWsXsSqL2fyUHzDQ
