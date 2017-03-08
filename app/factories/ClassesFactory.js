'use strict';

app.factory("ClassesFactory", () => {

  generateClass: function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
    // Get the string at the index
    var randomClass = this.allowedClasses[random];
    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  }

});
