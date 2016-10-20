(function() {
  'use strict';

  angular
    .module('CardDrawApp.components.deck')
    .directive('cdDeck', DeckDirective)
    // .controller('mainController', mainController);
  DeckDirective.$inject = []

  function DeckDirective () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'DeckController',
      controllerAs: 'vm',
      templateUrl: './js/components/deck/deck.html'
    }
  }

}());
