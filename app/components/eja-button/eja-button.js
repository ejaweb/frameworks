(function() {
  'use strict';

  angular
    .module('eja')
    .directive('ejaButton', ejaButton);

  ejaButton.$inject = [
    '$log'
  ];

  function ejaButton($log) {
    
    function link(scope, element, attr) {
      $log.log('eja-button initialized');
    }

    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        'label': '@',
        'link' : '@'
      },
      templateUrl: 'eja-button/eja-button.html',
      link: link
    };

    return directive;
  }

})();