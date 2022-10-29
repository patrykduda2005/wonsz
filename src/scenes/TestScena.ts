import Player from '../classes/player/Player';
//import Player = require('../classes/Player);

export default class TestScena extends Phaser.Scene {
    constructor() {
        super({key:"TestScena"});
    }

    preload() {
        this.load.image("background", "./src/assets/temp_background.jpg");
        this.load.spritesheet("player","./src/assets/player.png", { frameWidth: 36, frameHeight: 72 });
    }

    create() {
        this.add.image(1280/2, 720/2, "background");
        this.matter.add.rectangle(1280/2, 700, 1280, 100, {isStatic: true});
        var player: Phaser.Physics.Matter.Sprite = new Player(this, 500, 300); 
    }

    update() {
    }
}
