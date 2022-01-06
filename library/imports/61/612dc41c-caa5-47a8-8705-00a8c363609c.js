"use strict";
cc._RF.push(module, '612dcQcyqVHqIcFAKjDY2Cc', 'enemyControl');
// script/enemyControl.ts

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
var playerControl_1 = require("./playerControl");
var scoreControl_1 = require("./scoreControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyControl = /** @class */ (function (_super) {
    __extends(EnemyControl, _super);
    function EnemyControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDie = false;
        // LIFE-CYCLE CALLBACKS:
        _this.isCollision = false;
        return _this;
    }
    EnemyControl.prototype.onLoad = function () {
    };
    EnemyControl.prototype.start = function () {
        // this.node.setSiblingIndex(2);
    };
    EnemyControl.prototype.die = function () {
        var _this = this;
        //加载爆炸图片 
        if (this.node.y < 396) {
            this.isDie = true;
            cc.loader.loadRes('image/imageAny', cc.SpriteAtlas, function (err, res) {
                //cc.loader.loadRes():动态加载resources文件里的资源
                //sprite：精灵组建
                // spriteFrame：sprite组件使用图像资源的一种方式，每个texture文件都会产生一个 SpriteFrame 的图像资源
                _this.node.getComponent(cc.Sprite).spriteFrame = res.getSpriteFrame('enemy0_die');
                setTimeout(function () {
                    if (_this.node) {
                        //攻击成功音效
                        cc.find('Canvas/audio').getComponent(cc.AudioSource).play();
                        //分数加1
                        cc.find('Canvas/score/number').getComponent(scoreControl_1.default).scoreAdd();
                        _this.node.destroy();
                    }
                }, 300);
            });
        }
    };
    EnemyControl.prototype.update = function (dt) {
        //敌人移动
        if (!this.isDie) {
            this.node.y -= 300 * dt;
        }
        if (this.node.y < -455 && this.node) {
            this.node.destroy();
        }
    };
    //当碰撞系统检测到有碰撞产生时，将会以回调的方式通知使用者
    EnemyControl.prototype.onCollisionEnter = function (other) {
        //碰到敌人，先敌人销毁，再自己销毁
        if (other.tag == 2) {
            other.getComponent(playerControl_1.default).isCollision = !other.getComponent(playerControl_1.default).isCollision;
            if (other.getComponent(playerControl_1.default).isCollision) {
                //销毁我方飞机
                other.getComponent(playerControl_1.default).die();
                //销毁自己(敌方飞机)
                if (this.node) {
                    this.node.destroy();
                }
            }
        }
    };
    EnemyControl = __decorate([
        ccclass
    ], EnemyControl);
    return EnemyControl;
}(cc.Component));
exports.default = EnemyControl;

cc._RF.pop();