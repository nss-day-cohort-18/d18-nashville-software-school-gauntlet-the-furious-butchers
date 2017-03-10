'use strict';

app.controller("CombatCtrl", function($scope, ClassesFactory, PlayerFactory, SpellbookFactory, WeaponFactory, GameFactory, $route, $window, ngAudio) {
///////////////////
//Initialize Modals
///////////////////


  $scope.player = GameFactory.getGamePlayer();
  $scope.monster = PlayerFactory.getMonster();
  $scope.player.health += $scope.player.class.healthBonus;
  $scope.player.intelligence += $scope.player.class.intelligenceBonus;
  $scope.player.strength += $scope.player.class.strengthBonus;

  var playerDamage = 0;
  var monsterDamage = 0;

  var playerHealing = 0;

  $scope.player.health = Math.max(1, $scope.player.health);

  $(document).ready(function() {
    $("#playerPic").animate({left:200, opacity:"show"}, 3500);
    $("#monsterPic").animate({left:200, opacity:"show"}, 3500);
  });


  $scope.monster.randomMonClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * ($scope.monster.allowedClasses.length - 1));
    // Get the string at the index
    var randomClass = $scope.monster.allowedClasses[random];
    // Composes the corresponding player class into the player object
    $scope.monster.class = Object.create(ClassesFactory.getClass(randomClass));
    // Add the health bonus
    $scope.monster.health += $scope.monster.class.healthBonus;
    $scope.monster.health = Math.max(0, $scope.monster.health);
    $scope.monster.intelligence += $scope.monster.class.intelligenceBonus;
    $scope.monster.strength += $scope.monster.class.strengthBonus;
    return $scope.monster;
  };

//////////////////
//Create Monter
//////////////////
    if ($scope.player.gameCount === 4){
      $scope.player.gameCount = Math.floor((Math.random()*3)+1);
    }
    if ($scope.player.gameCount === 1) {
      $scope.monster = PlayerFactory.getOrc();
      $scope.monster.randomMonClass();
        if ($scope.monster.class.name === "Shaman") {
          $scope.monster.weapon = Object.create(SpellbookFactory.getSphere());
        } if ($scope.monster.class.name === "Warror" || "Berserker") {
          $scope.monster.weapon = Object.create(WeaponFactory.getWarAxe());
        }
    } if ($scope.player.gameCount === 2) {
      $scope.monster = PlayerFactory.getSkeleton();
      $scope.monster.randomMonClass();
      if ($scope.monster.class.name === "Wizard") {
        $scope.monster.weapon = Object.create(SpellbookFactory.getMagicMissile());
      } if ($scope.monster.class.name === "Sorcerer") {
        $scope.monster.weapon = Object.create(SpellbookFactory.getSphere());
      } if ($scope.monster.class.name === "Warror" || "Berserker") {
        $scope.monster.weapon = Object.create(WeaponFactory.getWarAxe());
      }
    } if ($scope.player.gameCount === 3) {
      $scope.monster = PlayerFactory.getBeholder();
      $scope.monster.randomMonClass();
      $scope.monster.weapon = Object.create(SpellbookFactory.getMagicMissile());
    } 
/////////////////////////////
//Control Health Bars
/////////////////////////////

  $scope.monsterMaxHealth = $scope.monster.health;
  $scope.playerMaxHealth = $scope.player.health;

  $scope.playerHealth = ($scope.player.health/$scope.playerMaxHealth)*100;
  $scope.monsterHealth = ($scope.monster.health/$scope.monsterMaxHealth)*100;



///////////////////////////
//Action Functions
////////////////////////////

  var playerAttack = function() {
    if ($scope.player.class.magical) {
      playerDamage = Math.floor(Math.floor(Math.random() * $scope.player.weapon.damage) + ($scope.player.intelligence / 20));
    } else {
      playerDamage = Math.floor(Math.floor(Math.random() * $scope.player.weapon.damage) + ($scope.player.strength / 20));
    }
    $scope.monster.health -= playerDamage;
    $scope.monster.health = Math.max(0, $scope.monster.health);
    var playerMessage = `<p class="combat-text">On turn #${$scope.turn} ${$scope.player.playerName} the ${$scope.player.class.name} attacked with their ${$scope.player.weapon.name} and did ${playerDamage} damage!</p>`;
    $("#combat-log").prepend(playerMessage);
  };

  var specialAttack = function(){
    if ($scope.player.class.magical) {
      playerHealing = Math.floor(Math.floor(Math.random() * $scope.player.weapon.damage) + ($scope.player.intelligence / 10));
    } else {
      playerHealing = Math.floor(Math.floor(Math.random() * $scope.player.weapon.damage) + ($scope.player.strength / 10));
    }
    $scope.player.health += playerHealing;
    var specialMessage = `<p class="combat-text">On turn #${$scope.turn} ${$scope.player.playerName} the ${$scope.player.class.name} healed with their SPECIAL for ${playerHealing} health!</p>`;
    $("#combat-log").prepend(specialMessage);
  };

  var monsterAttack = function() {
    if ($scope.monster.class.magical) {
      monsterDamage = Math.floor(Math.floor(Math.random() * $scope.monster.weapon.damage) + ($scope.monster.intelligence / 20));
    } else {
      monsterDamage = Math.floor(Math.floor(Math.random() * $scope.monster.weapon.damage) + ($scope.monster.strength / 20));
    }
    $scope.player.health -= monsterDamage;
    $scope.player.health = Math.max(0, $scope.player.health);
    var monsterMessage = `<p class="combat-text">On turn #${$scope.turn} ${$scope.monster.species} the ${$scope.monster.class.name} attacked with their ${$scope.monster.weapon.name} and did ${monsterDamage} damage!</p>`;
    $("#combat-log").prepend(monsterMessage);
    if ($scope.player.health <= 0){
      console.log("you lose");
       $('#modalLose').modal('show');
    }
  };
  $scope.startOver = function(){
    console.log("StartOver");
    $('#modalLose').modal('hide');
    $('#modalWin').modal('hide');
    $window.location.href = "#!/";
  };
  $scope.keepGoing = function(){
    console.log("keepGoing");
    $('#modalLose').modal('hide');
    $('#modalWin').modal('hide');
    $scope.player.gameCount += 1;
    GameFactory.setGamePlayer($scope.player);
    $route.reload();
  };





/////////////////////////
//Turn Function
/////////////////////////

  $scope.turn = 1;
  $scope.useSpecial = false;

  $scope.makeAttack = function(){
    playerAttack();
    $scope.playerHealth = ($scope.player.health/$scope.playerMaxHealth)*100;
    $scope.monsterHealth = ($scope.monster.health/$scope.monsterMaxHealth)*100;
    if ($scope.monster.health <= 0){
       $('#modalWin').modal('show');
    } else {
      monsterAttack();
      $scope.playerHealth = ($scope.player.health/$scope.playerMaxHealth)*100;
      $scope.monsterHealth = ($scope.monster.health/$scope.monsterMaxHealth)*100;
    }
    $scope.turn++;
    if ($scope.turn % 4 === 0) {
      $scope.useSpecial = true;
    }
  };

  $scope.special = function(){
    console.log("you clicked special");
    specialAttack();
    $scope.playerHealth = ($scope.player.health/$scope.playerMaxHealth)*100;
    $scope.monsterHealth = ($scope.monster.health/$scope.monsterMaxHealth)*100;
    
    monsterAttack();
    $scope.playerHealth = ($scope.player.health/$scope.playerMaxHealth)*100;
    $scope.monsterHealth = ($scope.monster.health/$scope.monsterMaxHealth)*100;
  
    $scope.useSpecial = false;
    $scope.turn++;
  };


});
