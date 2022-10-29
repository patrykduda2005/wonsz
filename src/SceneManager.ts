import 'phaser';

export default class SceneManager extends Phaser.Scene {
    constructor() {
        super({key:"SceneManager"});
    }

    preload() {
        //this.load.image("player","./src/assets/player.png");
    }

    create() {
        this.scene.launch("TestScena");
    }
}
