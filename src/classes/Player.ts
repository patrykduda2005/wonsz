export default class Player extends Phaser.Physics.Matter.Sprite
{
    constructor(world: Phaser.Physics.Matter.World, x: number, y: number) {
        let texture_manager: Phaser.Textures.TextureManager = world.scene.textures;
        let image: HTMLImageElement = new Image();
        image.src = "./src/assets/player.png";
        let texture: Phaser.Textures.Texture = new Phaser.Textures.Texture(texture_manager, "player", image);
        super(world, x, y, texture.key);
    }
}
