"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Phaser = require("phaser");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(world, x, y) {
        var texture_manager = world.scene.textures;
        var image = new Image();
        image.src = "../../assets/player.png";
        var texture = new Phaser.Textures.Texture(texture_manager, "player", image);
        return _super.call(this, world, x, y, texture) || this;
    }
    return Player;
}(Phaser.Physics.Matter.Sprite));
exports["default"] = Player;
