"use strict";
cc._RF.push(module, 'e32banXQpROVZdKvo16m2KB', 'playerControl');
// script/playerControl.ts

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
var PlayerControl = /** @class */ (function (_super) {
    __extends(PlayerControl, _super);
    function PlayerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletPre = null;
        _this.isCollision = false;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    PlayerControl.prototype.onLoad = function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
        }
    };
    //生命周期：onLoad -> onEnable -> start -> update -> lateUpdate -> onDisable -> onDestroy
    PlayerControl.prototype.start = function () {
        var _this = this;
        cc.director.getCollisionManager().enabled = true;
        //箭头函数和普通函数的this指向问题：
        //箭头函数的this：指向定义时所处上下文的对象,
        //普通函数的this：指向调用该函数的对象，
        //在这里如果用普通函数的话，this指向window
        //如果用箭头函数的话，this指向player节点
        //监听手指移动
        //飞机攻击
        //计时器，每0.5秒创造一个子弹
        this.schedule(function () {
            //将子弹变成预制体
            //cc.instantiate()：创建预制节点
            var bullet = cc.instantiate(_this.bulletPre);
            //设置父物体
            bullet.setParent(cc.find('Canvas/bulletContent'));
            //设置子弹位置            
            bullet.x = cc.find('Canvas/hero1').x;
            bullet.y = cc.find('Canvas/hero1').y + 60;
        }, 0.2);
    };
    PlayerControl.prototype.die = function (index) {
        var _this = this;
        //动态加载资源
        cc.loader.loadRes('image/imageAny', cc.SpriteAtlas, function (err, res) {
            _this.node.getComponent(cc.Sprite).spriteFrame = res.getSpriteFrame('hero1_die');
            setTimeout(function () {
                cc.find('Canvas/audioDie').getComponent(cc.AudioSource).play();
            }, 100);
            setTimeout(function () {
                cc.find('Canvas/bg').getComponent(cc.AudioSource).pause();
                cc.find('Canvas/gameOver').active = true;
                cc.director.pause();
                //我方飞机销毁
                if (_this.node) {
                    _this.node.destroy();
                }
            }, 400);
        });
    };
    __decorate([
        property(cc.Prefab)
    ], PlayerControl.prototype, "bulletPre", void 0);
    PlayerControl = __decorate([
        ccclass
    ], PlayerControl);
    return PlayerControl;
}(cc.Component));
exports.default = PlayerControl;

cc._RF.pop();