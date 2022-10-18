import Player from '../classes/Player';
//import Player = require('../classes/Player);

export default class TestScena extends Phaser.Scene {
    constructor() {
        super({key:"TestScena"});
    }

    preload() {
        this.load.image("sky", "./src/assets/sky.jpg");
    }

    create() {
        this.add.image(1280/2, 720/2, "sky");
        var player: Phaser.Physics.Matter.Sprite = new Player(this.matter.world, 500, 300); 
    }

    update() {
    }
}
