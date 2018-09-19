(function () {
  'use strict'

  angular
    .module('app')
    .controller('BooksController', BooksController)

  function BooksController ($state, booksService) {
    var vm = this

    console.log($state.params)

    // _Methods
    vm.listAll = listAll
    vm.lisByIsbn = lisByIsbn

    listAll()

    function listAll () {
      vm.books = booksService.listAll()
    }

    function lisByIsbn (isbn) {
      vm.book = booksService.lisByIsbn(isbn)
    }
  }
})()
