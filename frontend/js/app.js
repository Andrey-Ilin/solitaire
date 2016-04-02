/**
 * Created by andrej on 3/27/16.
 */

'use strict';

import Game from "./game.js";
import NewGame from "./newgame.js";

let game = new Game({
    "element": document.querySelector('[data-component="game"]')
});

let newgame = new NewGame;

game.toShuffleCards();
