(function () {
  'use strict'

  angular
    .module('app')
    .controller('BooksController', BooksController)

  function BooksController (booksService) {
    var vm = this

    // _Methods
    vm.listAll = listAll

    listAll()

    function listAll () {
      vm.books = booksService.listAll()
    }
  }
})()
