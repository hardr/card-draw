(function() {
  'use strict';

  angular.module('CardDrawApp.components.hand')
    .controller('HandController', HandController)

  HandController.$inject = ['HandService']

  function HandController (HandService) {
    HandService.draw().then(({ data: { cards }}) => {
      this.cards = cards
    })
    this.something = 'yayaya'
  }

}());
