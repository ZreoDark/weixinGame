"use strict";
cc._RF.push(module, '16a6eXaogpIDIT9qak1VQuj', 'bulletControl');
// script/bulletControl.ts

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
var BulletControl = /** @class */ (function (_super) {
    __extends(BulletControl, _super);
    function BulletControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 850;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BulletControl.prototype.onLoad = function () {
    };
    BulletControl.prototype.start = function () {
        // this.node.setSiblingIndex(2);
    };
    BulletControl.prototype.update = function (dt) {
        this.node.y += this.speed * dt;
        //子弹飞出屏幕要销毁
        if (this.node.y > 850 && this.node) {
            this.node.destroy();
        }
    };
    //当碰撞系统检测到有碰撞产生时，将会以回调的方式通知使用者
    BulletControl.prototype.onCollisionEnter = function (other) {
        //碰到敌人，先敌人销毁，再自己销毁
        if (other.tag == 0) {
            other.getComponent(enemyControl_1.default).isCollision = !other.getComponent(enemyControl_1.default).isCollision;
            //销毁敌人
            if (other.getComponent(enemyControl_1.default).isCollision) {
                other.getComponent(enemyControl_1.default).die();
            }
        }
    };
    //碰撞结束后
    BulletControl.prototype.onCollisionExit = function (other, self) {
        //销毁自己
        if (this.node) {
            this.node.destroy();
        }
    };
    __decorate([
        property
    ], BulletControl.prototype, "speed", void 0);
    BulletControl = __decorate([
        ccclass
    ], BulletControl);
    return BulletControl;
}(cc.Component));
exports.default = BulletControl;

cc._RF.pop();