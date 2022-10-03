import * as Phaser from 'phaser';
import Player from '../classes/Player';
//import Player = require('../classes/Player);

export default class TestScena extends Phaser.Scene {
    constructor() {
        super({key:"TestScena"});
    }

    preload() {
    }

    create() {
        var player: Phaser.Physics.Matter.Sprite = new Player(this.matter.world, 100, 100); 
    }

    update() {
    }
}
