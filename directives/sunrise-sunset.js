'use strict';

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

angular.module('sunrise-sunset',["clickDirectiveModule"])        
       .directive("sunriseSunset",["$http", function($http){
            return {
                restrict : "E",                
                template : `<div click-dir="testFunction(city)">
                            <div ng-bind='city' class='ind-city'> </div>
                            <table class="weather-table">
                            <thead> <th> Sunrise </th> <th> Sunset </th></thead>
                            <tbody> <tr><td> {{sunrise}}  </td> <td> {{sunset}}  </td> </tr>
                            </tbody></table>
                            <div>`,                             
                scope    : {
                    city : '@'                    
                },
                link    : function(scope, element, attrs){
                    let url = baseUrl + scope.city + ",india&appid=3d8b309701a13f65b660fa2c64cdc517";
                    $http.get(url)
                         .then(function(response){
                            var data = response.data.sys;
                            scope.sunrise = new Date(data.sunrise * 1000).toLocaleTimeString()
                            scope.sunset = new Date(data.sunset * 1000).toLocaleTimeString();
                        }, function(error){
                            console.log("Error while calling API. Error : " + error);
                        });

                    scope.testFunction = function(city) {
                        alert(`You clicked on city ${city}. This function is called by custom click directive.`);
                    }
                }
            }
       }]);      