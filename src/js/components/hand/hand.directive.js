(function() {

  'use strict';

  angular
    .module('CardDrawApp.components.hand')
    .directive('cdHand', HandDirective)
    // .controller('mainController', mainController);
  HandDirective.$inject = []

  function HandDirective () {
    return {
      restrict: 'E',
      controller: 'HandController',
      controllerAs: 'vm',
      templateUrl: './js/components/hand/hand.html'
    }
  }

})();
