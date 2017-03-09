'use strict';

app.controller("ClassCtrl", function($scope, GameFactory, ClassesFactory) {

$scope.player = GameFactory.getGamePlayer();
console.log($scope.player);

$scope.player.class = Object.create(ClassesFactory.getPlayerClass());
console.log($scope.player);

$scope.getClass = function(){
    console.log(this.item);
	$scope.player.class = Object.create(ClassesFactory.getClass(this.item));
    console.log($scope.player);
};

$scope.setPlayer = function(){
	GameFactory.setGamePlayer($scope.player);
};

});
