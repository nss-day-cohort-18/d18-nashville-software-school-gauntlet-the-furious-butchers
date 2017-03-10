'use strict';

app.factory("SpellbookFactory", () => {
/*
  Base spell function that defines name, damage, damage type
 */
var Spell = {
  name: "",
  damage: 0,
  damageTypes: ["lightning", "fire", "water", "earth", "mysticism"],
  type: "",
  toString:function() {
    return Spell.name + " of " + Spell.type + " for " + Spell.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
var Sphere = Object.create(Spell);
Sphere.name = "sphere";
Sphere.damage = Math.floor(Math.random() * 10 + 30);
var sphereRandom = Math.round(Math.random() * (Sphere.damageTypes.length - 1));
Sphere.type = Sphere.damageTypes[sphereRandom];


var MagicMissile = Object.create(Spell);
MagicMissile.name = "magic missile";
MagicMissile.damage = Math.floor(Math.random() * 20 + 40);
var missileRandom = Math.round(Math.random() * (MagicMissile.damageTypes.length - 1));
MagicMissile.type = MagicMissile.damageTypes[missileRandom];

var getSpell = function(){
	return Spell;
};

var getSphere = function(){
	return Sphere;
};

var getMagicMissile = function(){
	return MagicMissile;
};

return {getSpell, getSphere, getMagicMissile};

});
