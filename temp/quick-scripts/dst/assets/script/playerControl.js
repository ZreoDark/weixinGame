
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playerControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheWVyQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXFEQztRQWxERyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGlCQUFXLEdBQVcsS0FBSyxDQUFDOztRQWdENUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFoREcsd0JBQXdCO0lBRXhCLDhCQUFNLEdBQU47UUFDSSxJQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUM7WUFDdEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFDRCxvRkFBb0Y7SUFDcEYsNkJBQUssR0FBTDtRQUFBLGlCQW9CQztRQW5CRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxxQkFBcUI7UUFDckIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLFFBQVE7UUFDUCxNQUFNO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixVQUFVO1lBQ1YseUJBQXlCO1lBQ3pCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLE9BQU87WUFDUCxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQ2xELG9CQUFvQjtZQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDRCwyQkFBRyxHQUFILFVBQUksS0FBSztRQUFULGlCQWlCQztRQWhCRyxRQUFRO1FBQ0osRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxVQUFDLEdBQUcsRUFBQyxHQUFHO1lBQ3RELEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRixVQUFVLENBQUM7Z0JBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkUsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1AsVUFBVSxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUQsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BCLFFBQVE7Z0JBQ1IsSUFBRyxLQUFJLENBQUMsSUFBSSxFQUFDO29CQUNULEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3ZCO1lBQ0wsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ087SUFIVixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcURqQztJQUFELG9CQUFDO0NBckRELEFBcURDLENBckQwQyxFQUFFLENBQUMsU0FBUyxHQXFEdEQ7a0JBckRvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1bGxldENvbnRyb2wgZnJvbSBcIi4vYnVsbGV0Q29udHJvbFwiO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnVsbGV0UHJlOmNjLlByZWZhYiA9IG51bGw7XG4gICAgaXNDb2xsaXNpb246Ym9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSl7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgIH0gIFxuICAgIC8v55Sf5ZG95ZGo5pyf77yab25Mb2FkIC0+IG9uRW5hYmxlIC0+IHN0YXJ0IC0+IHVwZGF0ZSAtPiBsYXRlVXBkYXRlIC0+IG9uRGlzYWJsZSAtPiBvbkRlc3Ryb3lcbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy/nrq3lpLTlh73mlbDlkozmma7pgJrlh73mlbDnmoR0aGlz5oyH5ZCR6Zeu6aKY77yaXG4gICAgICAgIC8v566t5aS05Ye95pWw55qEdGhpc++8muaMh+WQkeWumuS5ieaXtuaJgOWkhOS4iuS4i+aWh+eahOWvueixoSxcbiAgICAgICAgLy/mma7pgJrlh73mlbDnmoR0aGlz77ya5oyH5ZCR6LCD55So6K+l5Ye95pWw55qE5a+56LGh77yMXG4gICAgICAgIC8v5Zyo6L+Z6YeM5aaC5p6c55So5pmu6YCa5Ye95pWw55qE6K+d77yMdGhpc+aMh+WQkXdpbmRvd1xuICAgICAgICAvL+WmguaenOeUqOeureWktOWHveaVsOeahOivne+8jHRoaXPmjIflkJFwbGF5ZXLoioLngrlcbiAgICAgICAgLy/nm5HlkKzmiYvmjIfnp7vliqhcbiAgICAgICAgIC8v6aOe5py65pS75Ye7XG4gICAgICAgIC8v6K6h5pe25Zmo77yM5q+PMC4156eS5Yib6YCg5LiA5Liq5a2Q5by5XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcbiAgICAgICAgICAgIC8v5bCG5a2Q5by55Y+Y5oiQ6aKE5Yi25L2TXG4gICAgICAgICAgICAvL2NjLmluc3RhbnRpYXRlKCnvvJrliJvlu7rpooTliLboioLngrlcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZSk7XG4gICAgICAgICAgICAvL+iuvue9rueItueJqeS9k1xuICAgICAgICAgICAgYnVsbGV0LnNldFBhcmVudChjYy5maW5kKCdDYW52YXMvYnVsbGV0Q29udGVudCcpKTtcbiAgICAgICAgICAgIC8v6K6+572u5a2Q5by55L2N572uICAgICAgICAgICAgXG4gICAgICAgICAgICBidWxsZXQueCA9IGNjLmZpbmQoJ0NhbnZhcy9oZXJvMScpLng7XG4gICAgICAgICAgICBidWxsZXQueSA9IGNjLmZpbmQoJ0NhbnZhcy9oZXJvMScpLnkgKyA2MDtcbiAgICAgICAgfSwwLjIpXG4gICAgfVxuICAgIGRpZShpbmRleCl7XG4gICAgICAgIC8v5Yqo5oCB5Yqg6L296LWE5rqQXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnaW1hZ2UvaW1hZ2VBbnknLGNjLlNwcml0ZUF0bGFzLChlcnIscmVzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHJlcy5nZXRTcHJpdGVGcmFtZSgnaGVybzFfZGllJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYXVkaW9EaWUnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9LDEwMCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmcnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9nYW1lT3ZlcicpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8v5oiR5pa56aOe5py66ZSA5q+BXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0sNDAwKVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==