angular.module('clickDirectiveModule', [])
        .directive('clickDir', btnClick);

    function btnClick() {
        return {
            restrict: 'A',
            scope: {
                clickDir: '&' 
            },
            link: function(scope, element, attrs){
               element.on('click', function(e) {
                  scope.clickDir();
               });
            }
      };
    }