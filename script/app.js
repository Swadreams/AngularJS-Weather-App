'use strict';
(function(){
    angular.module("weatherApp",["ngRoute", "sunrise-sunset"])
           .config(['$routeProvider', function($routeProvider){
                $routeProvider
                    .when('/cities', {
                        template : `<section class="cities-weather"> <div class="item" ng-repeat="city in $ctrl.cities">
                                    <sunrise-sunset city="{{city}}"> Test </sunrise-sunset> </div>
                                    </section>`,
                        controller:  'weatherController as $ctrl'              
                    });
                    $routeProvider.otherwise({redirectTo: '/cities'});
           }])
           .controller('weatherController', function(){
                this.message = "Indian Cities Weather";
                this.cities = [
                    "Pune",
                    "Mumbai", 
                    "Delhi", 
                    "Ahmedabad",
                    "Bengaluru"
                ];
            })        
})();