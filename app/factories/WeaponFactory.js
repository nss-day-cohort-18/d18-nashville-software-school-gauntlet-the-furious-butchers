'use strict';

app.factory("WeaponFactory", () => {

  var Weapon = {
    name: "bare hands",
    damage: 1,
    hands: 2,
    toString: function() {
      return Weapon.name;
    }
  };

  var Dagger = Object.create(Weapon);
  Dagger.name = "dagger";
  Dagger.damage = 4;
  Dagger.hands = 1;

  var BroadSword = Object.create(Weapon);
  BroadSword.name = "BroadSword";
  BroadSword.damage = 14;
  BroadSword.hands = 2;

  var WarAxe = Object.create(Weapon);
  WarAxe.name = "war axe";
  WarAxe.damage = 18;
  WarAxe.hands = 2;

  var getDagger = function() {
    return Dagger;
  };

  var getBroadSword = function() {
    return BroadSword;
  };

  var getWarAxe = function() {
    return WarAxe;
  };

  var getWeapon = function() {
    return Weapon;
  };

  return {getDagger, getBroadSword, getWarAxe, getWeapon};

});
