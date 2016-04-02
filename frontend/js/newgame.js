/**
 * Created by andrey on 02.04.16.
 */

'use strict';

class NewGame {
    constructor() {
        this._el = document.getElementById('newgame');
        this._el.onclick = function () {
            location.reload();
        };
    }
}

module.exports = NewGame;

