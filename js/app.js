var app = angular.module("myApp",[]);

app.controller("TestCtrl",['$scope',function($scope){
		$scope.names = [
			'Carmen','Andrei','Ionut','Maria'
		];
		console.log($scope.names);

		$scope.name = "Carmen"; 

		//Add function
		$scope.addName = function(){
			console.log("Button clicked");
			console.log($scope.firstname);

			$scope.names.push($scope.firstname);
			$scope.firstname = "";
		}

		//Delete function
		$scope.delete = function(index){
			console.log(index);
			$scope.names.splice(index,1);
		}

		
		
}]);

