(function () {
  'use strict'

  angular
    .module('app')
    .controller('BooksDetailController', BooksDetailController)

  function BooksDetailController ($state, booksService, Messages) {
    var vm = this

    // Data
    vm.book = {}
    vm.options = {
      showAlert: false,
      msgDanger: ''
    }

    // _Methods
    onInit()

    function onInit () {
      // Params
      lisByIsbn($state.params.id)
    }

    function lisByIsbn (isbn) {
      console.log(isbn)
      vm.book = booksService.lisByIsbn(isbn)

      console.log(vm.book)

      if (vm.book.length === 0) {
        vm.options.showAlert = true
        vm.options.msgDanger = Messages.book().NOTFOUND
      }
    }
  }
})()
