"use strict";
cc._RF.push(module, '1134cl8st1BuKDVa7SRiZsW', 'enemyManageControl');
// script/enemyManageControl.ts

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
var enemyControl_1 = require("./enemyControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyManagerControl = /** @class */ (function (_super) {
    __extends(EnemyManagerControl, _super);
    function EnemyManagerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //敌人预制体
        _this.enemyPre = null;
        _this.indexEnemy = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    EnemyManagerControl.prototype.start = function () {
        var _this = this;
        //每隔2秒创建一个敌人
        var time = 0.4;
        this.schedule(function () {
            //创建预制节点
            var enemy = cc.instantiate(_this.enemyPre);
            //指定父节点为当前场景
            enemy.setParent(cc.find('Canvas/enemyContent'));
            enemy.getComponent(enemyControl_1.default).isCollision = false;
            //指定x，y坐标值
            var width_ = Math.floor(cc.winSize.width);
            enemy.y = _this.node.y;
            enemy.x = Math.random() * (width_ / 2 - 60) * 2 - (width_ / 2 - 60);
        }, time);
    };
    EnemyManagerControl.prototype.update = function (dt) { };
    __decorate([
        property(cc.Prefab)
    ], EnemyManagerControl.prototype, "enemyPre", void 0);
    EnemyManagerControl = __decorate([
        ccclass
    ], EnemyManagerControl);
    return EnemyManagerControl;
}(cc.Component));
exports.default = EnemyManagerControl;

cc._RF.pop();