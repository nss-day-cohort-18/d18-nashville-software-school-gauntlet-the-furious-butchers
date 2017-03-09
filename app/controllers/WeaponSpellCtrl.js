'use strict';

app.controller("WeaponSpellCtrl", function($scope, GameFactory, $routeParams, WeaponFactory, SpellbookFactory) {

$scope.player = GameFactory.getGamePlayer();

$scope.equipDagger = function(){
	$scope.player.weapon = Object.create(WeaponFactory.getDagger());
};
$scope.equipBroadsword = function(){
  $scope.player.weapon = Object.create(WeaponFactory.getBroadSword());

};
$scope.equipWarAxe = function(){
	$scope.player.weapon = Object.create(WeaponFactory.getWarAxe());
};
$scope.equipNothing = function(){
	$scope.player.weapon = Object.create(WeaponFactory.getWeapon());
};
$scope.equipSphere = function(){
	$scope.player.weapon = Object.create(SpellbookFactory.getSphere());
};
$scope.equipMagicMissile = function(){
	$scope.player.weapon = Object.create(SpellbookFactory.getMagicMissile());
};

$scope.setPlayer = function(){
	GameFactory.setGamePlayer($scope.player);
};

});
