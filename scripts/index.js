var myApp = angular
      .module("myModule", [])
      .controller("myController", function ($scope, $http) {

          $http.get("https:api.github.com/search/repositories?q=TEST")
               .then(function (response) {
            	   	$scope.person = response.data;
                   
               });
          
          
          $scope.searchtext=null;
          
          $scope.Submit = function(name){
        	  $scope.searchtext=name;
        	  
          };
      });