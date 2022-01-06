
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bulletControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnVsbGV0Q29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUEwQ0M7UUF2Q0UsV0FBSyxHQUFVLEdBQUcsQ0FBQzs7SUF1Q3RCLENBQUM7SUFyQ0csd0JBQXdCO0lBRXhCLDhCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLGdDQUFnQztJQUNwQyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMvQixXQUFXO1FBQ1gsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ1QsQ0FBQztJQUNELDhCQUE4QjtJQUM5Qix3Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztRQUNsQixrQkFBa0I7UUFDbEIsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQztZQUNkLEtBQUssQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM1RixNQUFNO1lBQ1AsSUFBRyxLQUFLLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUM7Z0JBQzVDLEtBQUssQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzFDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsT0FBTztJQUNQLHVDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsTUFBTTtRQUNOLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFFTCxDQUFDO0lBckNGO1FBREMsUUFBUTtnREFDVTtJQUhELGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwQ2pDO0lBQUQsb0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzBDLEVBQUUsQ0FBQyxTQUFTLEdBMEN0RDtrQkExQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW5lbXlDb250cm9sIGZyb20gXCIuL2VuZW15Q29udHJvbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBAcHJvcGVydHlcbiAgIHNwZWVkOm51bWJlciA9IDg1MDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoMik7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgLy/lrZDlvLnpo57lh7rlsY/luZXopoHplIDmr4FcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS55ID4gODUwICYmIHRoaXMubm9kZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgLy/lvZPnorDmkp7ns7vnu5/mo4DmtYvliLDmnInnorDmkp7kuqfnlJ/ml7bvvIzlsIbkvJrku6Xlm57osIPnmoTmlrnlvI/pgJrnn6Xkvb/nlKjogIVcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyKXtcbiAgICAgICAgLy/norDliLDmlYzkurrvvIzlhYjmlYzkurrplIDmr4HvvIzlho3oh6rlt7HplIDmr4FcbiAgICAgICAgaWYob3RoZXIudGFnID09IDApe1xuICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbCkuaXNDb2xsaXNpb24gPSAhb3RoZXIuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbCkuaXNDb2xsaXNpb247XG4gICAgICAgICAgICAgLy/plIDmr4HmlYzkurpcbiAgICAgICAgICAgIGlmKG90aGVyLmdldENvbXBvbmVudChFbmVteUNvbnRyb2wpLmlzQ29sbGlzaW9uKXtcbiAgICAgICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoRW5lbXlDb250cm9sKS5kaWUoKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgfVxuICAgIC8v56Kw5pKe57uT5p2f5ZCOXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XG4gICAgICAgIC8v6ZSA5q+B6Ieq5bexXG4gICAgICAgIGlmKHRoaXMubm9kZSl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxufVxuIl19