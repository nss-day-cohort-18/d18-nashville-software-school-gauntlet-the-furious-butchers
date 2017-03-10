'use strict';

app.factory("ClassesFactory", () => {

  // generateClass: function() {
  //   // Get a random index from the allowed classes array
  //   var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
  //   // Get the string at the index
  //   var randomClass = this.allowedClasses[random];
  //   // Composes the corresponding player class into the player object
  //   this.class = new Gauntlet.GuildHall[randomClass]();
  //   // Add the health bonus
  //   this.health += this.class.healthBonus;
  //   return this.class;
  // }

  var PlayerClass = {
    name: "Beggar",
    healthBonus: 0,
    strengthBonus: 0,
    intelligenceBonus: 0,
    magical: false,
    toString: function() {
      return PlayerClass.name;
    }
  };

  var Fighter = Object.create(PlayerClass);
  Fighter.healthBonus = 30;
  Fighter.strengthBonus = 10;

  var Warrior = Object.create(Fighter);
  Warrior.name = "Warrior";
  Warrior.healthBonus = Warrior.healthBonus + 55;
  Warrior.strengthBonus = Warrior.strengthBonus + 30;

  var Valkyrie = Object.create(Fighter);
  Valkyrie.name = "Valkyrie";
  Valkyrie.healthBonus = Valkyrie.healthBonus + 50;
  Valkyrie.strengthBonus = Valkyrie.strengthBonus + 10;

  var Berserker = Object.create(Fighter);
  Berserker.name = "Berserker";
  Berserker.healthBonus = Berserker.healthBonus + 65;
  Berserker.strengthBonus = Berserker.strengthBonus + 20;

  var Monk = Object.create(Fighter);
  Monk.name = "Monk";
  Monk.healthBonus = Monk.healthBonus + 40;
  Monk.strengthBonus = Monk.strengthBonus + 40;

  var Mage = Object.create(PlayerClass);
  Mage.name = "Mage";
  Mage.magical = true;
  Mage.healthBonus = Mage.healthBonus + 5;
  Mage.strengthBonus = Mage.strengthBonus - 20;
  Mage.intelligenceBonus = Mage.intelligenceBonus + 40;

  var Shaman = Object.create(Mage);
  Shaman.name = "Shaman";
  Shaman.healthBonus = Shaman.healthBonus + 35;
  Shaman.strengthBonus = Shaman.strengthBonus - 10;
  Shaman.intelligenceBonus = Shaman.intelligenceBonus + 60;

  var Wizard = Object.create(Mage);
  Wizard.name = "Wizard";
  Wizard.healthBonus = Wizard.healthBonus + 15;
  Wizard.strengthBonus = Wizard.strengthBonus - 25;
  Wizard.intelligenceBonus = Wizard.intelligenceBonus + 80;

  var Conjurer = Object.create(Mage);
  Conjurer.name = "Conjurer";
  Conjurer.strengthBonus = Conjurer.strengthBonus + 25;
  Conjurer.intelligenceBonus = Conjurer.intelligenceBonus + 50;

  var Sorcerer = Object.create(Mage);
  Sorcerer.name = "Sorcerer";
  Sorcerer.healthBonus = Sorcerer.healthBonus + 20;
  Sorcerer.strengthBonus = Sorcerer.strengthBonus - 20;
  Sorcerer.intelligenceBonus = Sorcerer.intelligenceBonus + 70;

  var getPlayerClass = function() {
    return PlayerClass;
  };

  var getClass = function(UserClass) {
    if (UserClass === Warrior.name){
        return Warrior;
    }
    if (UserClass === Valkyrie.name){
        return Valkyrie;
    }
    if (UserClass === Berserker.name){
        return Berserker;
    }
    if (UserClass === Monk.name){
        return Monk;
    }
    if (UserClass === Shaman.name){
        return Shaman;
    }
    if (UserClass === Wizard.name){
        return Wizard;
    }
    if (UserClass === Sorcerer.name){
        return Sorcerer;
    }
    if (UserClass === Conjurer.name){
        return Conjurer;
  }
  };

  return {getPlayerClass, getClass};

});
