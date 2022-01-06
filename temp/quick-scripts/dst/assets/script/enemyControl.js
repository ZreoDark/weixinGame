
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemyControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZW5lbXlDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE2REM7UUEzREcsV0FBSyxHQUFXLEtBQUssQ0FBQztRQUN0Qix3QkFBd0I7UUFDeEIsaUJBQVcsR0FBVyxLQUFLLENBQUM7O0lBeURoQyxDQUFDO0lBeERHLDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLGdDQUFnQztJQUNwQyxDQUFDO0lBQ0QsMEJBQUcsR0FBSDtRQUFBLGlCQXVCQztRQXRCRyxTQUFTO1FBQ1QsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxVQUFDLEdBQUcsRUFBQyxHQUFHO2dCQUN0RCx5Q0FBeUM7Z0JBQ3pDLGFBQWE7Z0JBQ2Isc0VBQXNFO2dCQUN0RSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pGLFVBQVUsQ0FBQztvQkFDUCxJQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUM7d0JBQ1QsUUFBUTt3QkFDUixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzVELE1BQU07d0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3JFLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3ZCO2dCQUNMLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFJTCxDQUFDO0lBQ0QsNkJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixNQUFNO1FBQ04sSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ0EsOEJBQThCO0lBQzlCLHVDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ25CLGtCQUFrQjtRQUNsQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDO1lBQ2QsS0FBSyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQy9GLElBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUMsV0FBVyxFQUFDO2dCQUM3QyxRQUFRO2dCQUNSLEtBQUssQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxZQUFZO2dCQUNaLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztvQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN2QjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBM0RnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNkRoQztJQUFELG1CQUFDO0NBN0RELEFBNkRDLENBN0R5QyxFQUFFLENBQUMsU0FBUyxHQTZEckQ7a0JBN0RvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllckNvbnRyb2wgZnJvbSBcIi4vcGxheWVyQ29udHJvbFwiO1xuaW1wb3J0IFNjb3JlQ29udHJvbCBmcm9tIFwiLi9zY29yZUNvbnRyb2xcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGlzRGllOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBpc0NvbGxpc2lvbjpib29sZWFuID0gZmFsc2U7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KDIpO1xuICAgIH1cbiAgICBkaWUoKXsvL+iiq+WtkOW8ueeisOaSnuS5i+WQjuWwseS8mumUgOavgVxuICAgICAgICAvL+WKoOi9veeIhueCuOWbvueJhyBcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPCAzOTYpe1xuICAgICAgICAgICAgdGhpcy5pc0RpZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnaW1hZ2UvaW1hZ2VBbnknLGNjLlNwcml0ZUF0bGFzLChlcnIscmVzKT0+e1xuICAgICAgICAgICAgICAgIC8vY2MubG9hZGVyLmxvYWRSZXMoKTrliqjmgIHliqDovb1yZXNvdXJjZXPmlofku7bph4znmoTotYTmupBcbiAgICAgICAgICAgICAgICAvL3Nwcml0Ze+8mueyvueBtee7hOW7ulxuICAgICAgICAgICAgICAgIC8vIHNwcml0ZUZyYW1l77yac3ByaXRl57uE5Lu25L2/55So5Zu+5YOP6LWE5rqQ55qE5LiA56eN5pa55byP77yM5q+P5LiqdGV4dHVyZeaWh+S7tumDveS8muS6p+eUn+S4gOS4qiBTcHJpdGVGcmFtZSDnmoTlm77lg4/otYTmupBcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXMuZ2V0U3ByaXRlRnJhbWUoJ2VuZW15MF9kaWUnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aUu+WHu+aIkOWKn+mfs+aViFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2F1ZGlvJykuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WIhuaVsOWKoDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zY29yZS9udW1iZXInKS5nZXRDb21wb25lbnQoU2NvcmVDb250cm9sKS5zY29yZUFkZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sMzAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIC8v5pWM5Lq656e75YqoXG4gICAgICAgIGlmKCF0aGlzLmlzRGllKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS55IC09IDMwMCAqIGR0O1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubm9kZS55IDwgLTQ1NSAmJiB0aGlzLm5vZGUpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgLy/lvZPnorDmkp7ns7vnu5/mo4DmtYvliLDmnInnorDmkp7kuqfnlJ/ml7bvvIzlsIbkvJrku6Xlm57osIPnmoTmlrnlvI/pgJrnn6Xkvb/nlKjogIVcbiAgICAgb25Db2xsaXNpb25FbnRlcihvdGhlcil7XG4gICAgICAgIC8v56Kw5Yiw5pWM5Lq677yM5YWI5pWM5Lq66ZSA5q+B77yM5YaN6Ieq5bex6ZSA5q+BXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAyKXtcbiAgICAgICAgICAgIG90aGVyLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sKS5pc0NvbGxpc2lvbiA9ICFvdGhlci5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbCkuaXNDb2xsaXNpb247XG4gICAgICAgICAgICBpZihvdGhlci5nZXRDb21wb25lbnQoUGxheWVyQ29udHJvbCkuaXNDb2xsaXNpb24pe1xuICAgICAgICAgICAgICAgIC8v6ZSA5q+B5oiR5pa56aOe5py6XG4gICAgICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFBsYXllckNvbnRyb2wpLmRpZSgpO1xuICAgICAgICAgICAgICAgIC8v6ZSA5q+B6Ieq5bexKOaVjOaWuemjnuacuilcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5vZGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4iXX0=