(function () {
  'use strict'

  angular
    .module('app')
    .controller('BooksController', BooksController)

  function BooksController (booksService) {
    var vm = this

    // _Methods
    vm.listAll = listAll
    vm.listById = listById

    listAll()

    function listAll () {
      const books = booksService.listAll()
      console.log(books)
    }

    function listById (id) {

    }
  }
})()
