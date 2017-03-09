'use strict';

app.factory("PlayerFactory", () => {

  // get Player [by gameID] / set Player [gameID]
  // get Human
  // get Dwarf
  // get Elf
  // get Monster [by gameID] / set Monster [gameID]
  // get Orc
  // get Skeleton
  // get Beholder

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
  */

  var Player = {
    species: null,
    class: null,
    weapon: null,
    playerName: "unknown adventurer",
    health: Math.floor(Math.random() * 40 + 50),
    limbs: ["head", "neck", "arm", "leg", "torso"],
    skinColor: "gray",
    strength: 90,
    intelligence: 90,
    toString: function() {
      var output = [Player.playerName,
        ": a ",
        Player.skinColor,
        " skinned ",
        Player.species,
        " ",
        Player.class,
        " with ",
        Player.health,
        " health. ",
        (Player.class.magical) ? "Able to cast " : " Wielding a ",
        Player.weapon.toString(),
        "!"
      ].join("");
      return output;
    },
    setWeapon: function(newWeapon) {
      Player.weapon = newWeapon;
    }
  };

  /*
    Define the base properties for a human in a
    constructor function.
   */
  var Human = Object.create(Player);
  Human.species = "Human";
  Human.intelligence = Human.intelligence + 20;
  Human.skinColors = ["brown", "red", "white", "disease"];
  Human.randomSkin = Math.round(Math.random() * (Human.skinColors.length-1));
  Human.skinColor = Human.skinColors[Human.randomSkin];
  Human.allowedClasses = ["Warrior", "Berserker", "Wizard", "Conjurer"];

  var Dwarf = Object.create(Player);
  Dwarf.species = "Dwarf";
  Dwarf.intelligence = Dwarf.intelligence - 20;
  Dwarf.strength = Dwarf.strength + 20;
  Dwarf.skinColors = ["brown", "red", "white", "disease"];
  Dwarf.randomSkin = Math.round(Math.random() * (Dwarf.skinColors.length-1));
  Dwarf.skinColor = Dwarf.skinColors[Dwarf.randomSkin];
  Dwarf.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];

  var Elf = Object.create(Player);
  Elf.species = "Elf";
  Elf.intelligence = Elf.intelligence + 30;
  Elf.strength = Elf.strength - 20;
  Elf.skinColors = ["brown", "red", "white", "disease"];
  Elf.randomSkin = Math.round(Math.random() * (Elf.skinColors.length-1));
  Elf.skinColor = Elf.skinColors[Elf.randomSkin];
  Elf.allowedClasses = ["Shaman", "Wizard", "Conjurer", "Sorcerer"];


  /*
    Define the base properties for a monster in a
    constructor function.
   */
  var Monster = Object.create(Player);
  Monster.health = Monster.health - 30;
  Monster.intelligence = Monster.intelligence -20;
  Monster.strength = Monster.strength + 30;

  var Orc = Object.create(Monster);
  Orc.species = "Orc";
  Orc.health = Orc.health + 20;
  Orc.skinColors = ["brown", "red", "green", "spotted"];
  Orc.randomSkin = Math.round(Math.random() * (Orc.skinColors.length-1));
  Orc.skinColor = Orc.skinColors[Orc.randomSkin];
  Orc.allowedClasses = ["Shaman", "Warrior", "Berserker"];

  var Skeleton = Object.create(Monster);
  Skeleton.species = "Skeleton";
  Skeleton.health = Skeleton.health + 20;
  Skeleton.intelligence = Skeleton.intelligence + 20;
  Skeleton.allowedClasses = ["Berserker", "Warrior", "Wizard", "Sorcerer"];

  var Beholder = Object.create(Monster);
  Beholder.species = "Beholder";
  Beholder.health = Beholder.health + 70;
  Beholder.intelligence = Beholder.intelligence + 70;
  Beholder.allowedClasses = ["Shaman", "Conjurer", "Wizard", "Sorcerer"];

  var getPlayer = function() {
    return Player;
  };

  var getHuman = function() {
    return Human;
  };

  var getDwarf = function() {
    return Dwarf;
  };

  var getElf = function() {
    return Elf;
  };

  var getMonster = function() {
    return Monster;
  };

  var getOrc = function() {
    return Orc;
  };

  var getSkeleton = function() {
    return Skeleton;
  };

  var getBeholder = function() {
    return Beholder;
  };

  return {getBeholder, getSkeleton, getOrc, getMonster, getHuman, getDwarf, getElf, getPlayer};
});
