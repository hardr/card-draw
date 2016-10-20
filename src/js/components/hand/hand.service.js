(function() {
  'use strict';

  angular.module('CardDrawApp.components.hand')
  .service('HandService', HandService)

  HandService.$inject = ['$http']

  const baseUrl = 'https://deckofcardsapi.com/api/deck'
  const newDeckPath = '/new/draw/?count=52'

  function HandService ($http) {
    this.deck = []
    this.draw = () => {
      return $http.get(baseUrl + newDeckPath)
    }
  }

}());
