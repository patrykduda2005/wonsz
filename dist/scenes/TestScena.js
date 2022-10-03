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
var Player_1 = require("../classes/Player");
//import Player = require('../classes/Player);
var TestScena = /** @class */ (function (_super) {
    __extends(TestScena, _super);
    function TestScena() {
        return _super.call(this, { key: "TestScena" }) || this;
    }
    TestScena.prototype.preload = function () {
    };
    TestScena.prototype.create = function () {
        var player = new Player_1["default"](this.matter.world, 100, 100);
    };
    TestScena.prototype.update = function () {
    };
    return TestScena;
}(Phaser.Scene));
exports["default"] = TestScena;
