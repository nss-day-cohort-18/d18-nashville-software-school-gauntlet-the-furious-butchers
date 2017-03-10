'use strict';

app.controller("RaceCtrl", function($scope, PlayerFactory, $routeParams, GameFactory, ngAudio) {

$scope.isHuman = true;
$scope.isElf = false;
$scope.isDwarf = false;





// Input for player.name[ng-model]
// Define $scope.player = {} [Object.create(species)]
$scope.player = Object.create(PlayerFactory.getHuman());

$scope.getHuman = function(){
	$scope.player = Object.create(PlayerFactory.getHuman());
	$scope.isDwarf = false;
	$scope.isElf = false;
	$scope.isHuman = true;
	console.log($scope.player);
};

$scope.getElf = function(){
	$scope.player = Object.create(PlayerFactory.getElf());
	$scope.isElf = true;
	$scope.isHuman = false;
	$scope.isDwarf = false;
	console.log($scope.player);
};

$scope.getDwarf = function(){
	$scope.player = Object.create(PlayerFactory.getDwarf());
	$scope.isDwarf = true;
	$scope.isHuman = false;
	$scope.isElf = false;
	console.log($scope.player);
};


$scope.setPlayer = function(){
	GameFactory.setGamePlayer($scope.player);
};

});
