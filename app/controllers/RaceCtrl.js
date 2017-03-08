'use strict';

app.controller("RaceCtrl", function($scope, PlayerFactory, $routeParams, GameFactory) {

$scope.isHuman = true;
$scope.isElf = false;
$scope.isDwarf = false;


  


// Input for player.name[ng-model]
// Define $scope.player = {} [Object.create(species)]
$scope.player = Object.create(PlayerFactory.getPlayer);


$scope.getHuman = function(){
	$scope.player = Object.create(PlayerFactory.getHuman);
}

$scope.getElf = function(){
	$scope.player = Object.create(PlayerFactory.getElf);
	$scope.isElf = true;
	$scope.isHuman = false;
}

$scope.getDwarf = function(){
	$scope.player = Object.create(PlayerFactory.getDwarf);
	$scope.isDwarf = true;
	$scope.isHuman = false;
}


$scope.setPlayer = function($scope.player){
	GameFactory.setGamePlayer($scope.player);
}

});
