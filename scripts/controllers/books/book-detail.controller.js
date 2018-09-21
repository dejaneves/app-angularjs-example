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
      var result = booksService.lisByIsbn(isbn)

      if (typeof result === 'undefined') {
        vm.options.showAlert = true
        vm.options.msgDanger = Messages.book().NOTFOUND
      } else {
        vm.book = result
      }
    }
  }
})()
