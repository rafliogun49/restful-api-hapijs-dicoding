const {
  addBookHandler,
  getAllBooksHandler,
  getBookWithIdHandler,
  putBookToEditByIdHandler,
  deleteBookWithIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookWithIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: putBookToEditByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookWithIdHandler,
  },

];

module.exports = routes;