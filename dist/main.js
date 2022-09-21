"use strict";
exports.__esModule = true;
var Phaser = require("phaser");
var TestScena = require("./scenes/TestScena");
var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1280,
        height: 720,
        autocenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        "default": 'matter',
        matter: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    Scene: [TestScena]
};
var game = new Phaser.Game(config);
