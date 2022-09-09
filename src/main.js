var Phaser = require("phaser");
var TestScena = require("./scenes/TestScena.js");
var config = {
    type: Phaser.Auto,
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
