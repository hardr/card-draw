(function() {
  'use strict';

  angular.module('CardDrawApp.components.deck')
  .service('DeckService', DeckService)

  DeckService.$inject = ['$http']

  function DeckService ($http) {
    
  }

}());
