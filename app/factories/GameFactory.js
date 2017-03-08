'use strict';

app.factory("GameFactory", () => {

  var gamePlayer = {};

  var setGamePlayer = function(player) {
    gamePlayer = player;
  };

  var getGamePlayer = () => {
    return gamePlayer;
  };

  return {setGamePlayer, getGamePlayer};

});
