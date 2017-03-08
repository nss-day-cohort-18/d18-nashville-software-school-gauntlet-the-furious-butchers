'use strict';

app.controller("ClassCtrl", function($scope, GameFactory, ClassFactory) {

$scope.player = GameFactory.getGamePlayer();
console.log($scope.player);

$scope.player = Object.create(ClassFactory.getPlayerClass());
console.log($scope.player);

$scope.getClass = function(){
	console.log(this.item);
	$scope.player = Object.create(ClassFactory.getClass());
};


});
