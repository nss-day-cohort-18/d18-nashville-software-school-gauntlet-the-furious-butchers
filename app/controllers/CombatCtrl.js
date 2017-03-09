'use strict';

app.controller("CombatCtrl", function($scope, ClassesFactory, PlayerFactory, SpellbookFactory, WeaponFactory, GameFactory, $routeParams) {

  $scope.player = GameFactory.getGamePlayer();
  $scope.monster = PlayerFactory.getMonster();
  $scope.player.health += $scope.player.class.healthBonus;
  $scope.player.intelligence += $scope.player.class.intelligenceBonus;
  $scope.player.strength += $scope.player.class.strengthBonus;
  var turn = 1;
  var playerDamage = 0;
  var monsterDamage = 0;

  $scope.monster.randomMonClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * ($scope.monster.allowedClasses.length - 1));
    // Get the string at the index
    var randomClass = $scope.monster.allowedClasses[random];
    // Composes the corresponding player class into the player object
    $scope.monster.class = Object.create(ClassesFactory.getClass(randomClass));
    // Add the health bonus
    $scope.monster.health += $scope.monster.class.healthBonus;
    $scope.monster.intelligence += $scope.monster.class.intelligenceBonus;
    $scope.monster.strength += $scope.monster.class.strengthBonus;
    return $scope.monster;
  };

  if (turn === 1) {
    $scope.monster = PlayerFactory.getOrc();
    $scope.monster.randomMonClass();
      if ($scope.monster.class.name === "Shaman") {
        $scope.monster.weapon = Object.create(SpellbookFactory.getSphere());
      } if ($scope.monster.class.name === "Warror" || "Berserker") {
        $scope.monster.weapon = Object.create(WeaponFactory.getWarAxe());
      }
  } if (turn === 2) {
    $scope.monster = PlayerFactory.getSkeleton();
    $scope.monster.randomMonclass();
    if ($scope.monster.class.name === "Wizard") {
      $scope.monster.weapon = Object.create(SpellbookFactory.getMagicMissile());
    } if ($scope.monster.class.name === "Sorcerer") {
      $scope.monster.weapon = Object.create(SpellbookFactory.getSphere());
    } if ($scope.monster.class.name === "Warror" || "Berserker") {
      $scope.monster.weapon = Object.create(WeaponFactory.getWarAxe());
    }
  } if (turn === 3) {
    $scope.monster = PlayerFactory.getBeholder();
    $scope.monster.randomMonclass();
    $scope.monster.weapon = Object.create(SpellbookFactory.getMagicMissile());
  }

  var playerAttack = function() {
    if ($scope.player.class.magical) {
      playerDamage = $scope.player.weapon.damage + ($scope.player.intelligence / 20);
    } else {
      playerDamage = $scope.player.weapon.damage + ($scope.player.strength / 20);
    }
    $scope.monster.health -= playerDamage;
  };

  var monsterAttack = function() {
    if ($scope.monster.class.magical) {
      monsterDamage = $scope.monster.weapon.damage + ($scope.monster.intelligence / 20);
    } else {
      monsterDamage = $scope.monster.weapon.damage + ($scope.monster.strength / 20);
    }
    $scope.player.health -= monsterDamage;
  };



});
