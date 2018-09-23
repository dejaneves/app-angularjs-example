(function () {
  'use strict'

  angular
    .module('app')
    .service('Messages', Messages)

  function Messages () {
    this.book = function (isbn) {
      return {
        NOTFOUND: 'Livro não encontrado.'
      }
    }
  }
})()
