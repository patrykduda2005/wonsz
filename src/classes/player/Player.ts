export default class Player extends Phaser.Physics.Matter.Sprite
{

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene.matter.world, x, y, "player");
        scene.add.existing(this);
        this.scene = scene;
    }

    WSAD = this.scene.input.keyboard.addKeys({
        'w': Phaser.Input.Keyboard.KeyCodes.W,
        's': Phaser.Input.Keyboard.KeyCodes.S,
        'a': Phaser.Input.Keyboard.KeyCodes.A,
        'd': Phaser.Input.Keyboard.KeyCodes.D
    });

    update(time:any, delta:any) {
        console.log("test");
    }

    run_right() {
    }
}
