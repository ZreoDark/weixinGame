
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemyManageControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZW5lbXlNYW5hZ2VDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQTRCQztRQTFCRyxPQUFPO1FBRVAsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFVLENBQUMsQ0FBQzs7SUF1QjFCLENBQUM7SUFyQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixtQ0FBSyxHQUFMO1FBQUEsaUJBY0M7UUFiRyxZQUFZO1FBQ1osSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLFFBQVE7WUFDUixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxZQUFZO1lBQ1osS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3JELFVBQVU7WUFDVixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBdkJkO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ007SUFKVCxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQTRCdkM7SUFBRCwwQkFBQztDQTVCRCxBQTRCQyxDQTVCZ0QsRUFBRSxDQUFDLFNBQVMsR0E0QjVEO2tCQTVCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZW15Q29udHJvbCBmcm9tIFwiLi9lbmVteUNvbnRyb2xcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteU1hbmFnZXJDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8v5pWM5Lq66aKE5Yi25L2TXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBlbmVteVByZTpjYy5QcmVmYWIgPSBudWxsO1xuICAgIGluZGV4RW5lbXk6bnVtYmVyID0gMDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8v5q+P6ZqUMuenkuWIm+W7uuS4gOS4quaVjOS6ulxuICAgICAgICBsZXQgdGltZSA9IDAuNDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xuICAgICAgICAgICAgLy/liJvlu7rpooTliLboioLngrlcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lbXlQcmUpO1xuICAgICAgICAgICAgLy/mjIflrprniLboioLngrnkuLrlvZPliY3lnLrmma9cbiAgICAgICAgICAgIGVuZW15LnNldFBhcmVudChjYy5maW5kKCdDYW52YXMvZW5lbXlDb250ZW50JykpO1xuICAgICAgICAgICAgZW5lbXkuZ2V0Q29tcG9uZW50KEVuZW15Q29udHJvbCkuaXNDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIC8v5oyH5a6aeO+8jHnlnZDmoIflgLxcbiAgICAgICAgICAgIGxldCB3aWR0aF8gPSBNYXRoLmZsb29yKGNjLndpblNpemUud2lkdGgpO1xuICAgICAgICAgICAgZW5lbXkueSA9IHRoaXMubm9kZS55O1xuICAgICAgICAgICAgZW5lbXkueCA9IE1hdGgucmFuZG9tKCkgKiAod2lkdGhfLzIgLSA2MCkgKiAyIC0gKHdpZHRoXy8yIC0gNjApO1xuICAgICAgICB9LHRpbWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=