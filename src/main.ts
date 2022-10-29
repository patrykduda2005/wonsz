import 'phaser';
import TestScena from './scenes/TestScena';
import SceneManager from './SceneManager';

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1280,
        height: 720,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {y:5}
        }
    },
    scene: [SceneManager, TestScena]
};

var game = new Phaser.Game(config);
