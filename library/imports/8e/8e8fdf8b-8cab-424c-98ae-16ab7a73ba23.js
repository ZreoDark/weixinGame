"use strict";
cc._RF.push(module, '8e8fd+LjKtCTJiuFqt6c7oj', 'gameAgain');
// script/gameAgain.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameAgain = /** @class */ (function (_super) {
    __extends(GameAgain, _super);
    function GameAgain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameAgain.prototype.start = function () {
    };
    GameAgain.prototype.gameAgain = function () {
        cc.director.resume();
        cc.find('Canvas/bg').getComponent(cc.AudioSource).play();
        cc.find('Canvas/score/number').getComponent(cc.Label).string = 0 + '';
        cc.find('Canvas/hero1').setPosition(0, -350);
        cc.find('Canvas/bulletContent/bullet1').setPosition(0, -280);
        var childrenEnemy = cc.find('Canvas/enemyContent').children;
        var childBullet = cc.find('Canvas/bulletContent/bullet1').children;
        for (var _i = 0, childrenEnemy_1 = childrenEnemy; _i < childrenEnemy_1.length; _i++) {
            var child = childrenEnemy_1[_i];
            child.destroy();
        }
        for (var _a = 0, childBullet_1 = childBullet; _a < childBullet_1.length; _a++) {
            var child = childBullet_1[_a];
            child.destroy();
        }
        cc.find('Canvas/set').active = false;
    };
    __decorate([
        property(cc.Label)
    ], GameAgain.prototype, "label", void 0);
    __decorate([
        property
    ], GameAgain.prototype, "text", void 0);
    GameAgain = __decorate([
        ccclass
    ], GameAgain);
    return GameAgain;
}(cc.Component));
exports.default = GameAgain;

cc._RF.pop();