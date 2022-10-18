import 'phaser';
import TestScena from './scenes/TestScena';

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: 1280,
        height: 720,
        autocenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y:0}
        }
    },
    scene: [TestScena]
};

var game = new Phaser.Game(config);
