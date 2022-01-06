
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/bgControl');
require('./assets/script/bulletControl');
require('./assets/script/canvas');
require('./assets/script/enemyControl');
require('./assets/script/enemyManageControl');
require('./assets/script/gameAgain');
require('./assets/script/gameContinue');
require('./assets/script/gameOver');
require('./assets/script/gamePause');
require('./assets/script/gameStartBtnControl');
require('./assets/script/playerControl');
require('./assets/script/scoreControl');
require('./assets/script/setZindex');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameContinue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb9f5PMLEpJOqtKcZ4OZ76l', 'gameContinue');
// script/gameContinue.ts

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
var GameContinue = /** @class */ (function (_super) {
    __extends(GameContinue, _super);
    function GameContinue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameContinue.prototype.start = function () {
    };
    GameContinue.prototype.gameContinue = function () {
        cc.director.resume();
        cc.find('Canvas/bg').getComponent(cc.AudioSource).play();
        cc.find('Canvas/set').active = false;
    };
    __decorate([
        property(cc.Label)
    ], GameContinue.prototype, "label", void 0);
    __decorate([
        property
    ], GameContinue.prototype, "text", void 0);
    GameContinue = __decorate([
        ccclass
    ], GameContinue);
    return GameContinue;
}(cc.Component));
exports.default = GameContinue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNvbnRpbnVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBcUJDO1FBbEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFjdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsbUNBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFROzhDQUNjO0lBTk4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFCaEM7SUFBRCxtQkFBQztDQXJCRCxBQXFCQyxDQXJCeUMsRUFBRSxDQUFDLFNBQVMsR0FxQnJEO2tCQXJCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRpbnVlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgZ2FtZUNvbnRpbnVlKCl7XG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmcnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NldCcpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gamePause.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75a897aeXlHwLXbb8LSN/MY', 'gamePause');
// script/gamePause.ts

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
var GamePause = /** @class */ (function (_super) {
    __extends(GamePause, _super);
    function GamePause() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GamePause.prototype.start = function () {
    };
    GamePause.prototype.gamePause = function () {
        cc.find('Canvas/set').active = true;
        cc.find('Canvas/bg').getComponent(cc.AudioSource).pause();
        cc.director.pause();
    };
    __decorate([
        property(cc.Label)
    ], GamePause.prototype, "label", void 0);
    __decorate([
        property
    ], GamePause.prototype, "text", void 0);
    GamePause = __decorate([
        ccclass
    ], GamePause);
    return GamePause;
}(cc.Component));
exports.default = GamePause;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZVBhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcUJDO1FBbEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFjdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsNkJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFHdkI7UUFEQyxRQUFROzJDQUNjO0lBTk4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXFCN0I7SUFBRCxnQkFBQztDQXJCRCxBQXFCQyxDQXJCc0MsRUFBRSxDQUFDLFNBQVMsR0FxQmxEO2tCQXJCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhdXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgZ2FtZVBhdXNlKCl7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zZXQnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmcnKS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBhdXNlKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameAgain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUFnYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZ0NDO1FBN0JHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUF5QnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw2QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzVELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDbkUsS0FBaUIsVUFBYSxFQUFiLCtCQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUM7WUFBM0IsSUFBSSxLQUFLLHNCQUFBO1lBQ1QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBQ0QsS0FBaUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUM7WUFBekIsSUFBSSxLQUFLLG9CQUFBO1lBQ1QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO1FBQ0QsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUEzQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVE7MkNBQ2M7SUFOTixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0M3QjtJQUFELGdCQUFDO0NBaENELEFBZ0NDLENBaENzQyxFQUFFLENBQUMsU0FBUyxHQWdDbEQ7a0JBaENvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQWdhaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBnYW1lQWdhaW4oKXtcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iZycpLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSkucGxheSgpO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvc2NvcmUvbnVtYmVyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAwICsgJyc7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9oZXJvMScpLnNldFBvc2l0aW9uKDAsLTM1MCk7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9idWxsZXRDb250ZW50L2J1bGxldDEnKS5zZXRQb3NpdGlvbigwLC0yODApO1xuICAgICAgICBsZXQgY2hpbGRyZW5FbmVteSA9IGNjLmZpbmQoJ0NhbnZhcy9lbmVteUNvbnRlbnQnKS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGNoaWxkQnVsbGV0ID0gY2MuZmluZCgnQ2FudmFzL2J1bGxldENvbnRlbnQvYnVsbGV0MScpLmNoaWxkcmVuO1xuICAgICAgICBmb3IobGV0IGNoaWxkIG9mIGNoaWxkcmVuRW5lbXkpe1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgY2hpbGQgb2YgY2hpbGRCdWxsZXQpe1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zZXQnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a938gfhK5G2LdVmkCpiHtN', 'bgControl');
// script/bgControl.ts

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
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BgControl.prototype.onLoad = function () {
    };
    BgControl.prototype.start = function () {
    };
    //每帧都会调用
    BgControl.prototype.update = function (dt) {
        //背景移动
        // 遍历背景
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            bgNode.y -= 50 * dt; //每秒移动50像素
            if (bgNode.y < -850) {
                bgNode.y = 850;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], BgControl.prototype, "label", void 0);
    __decorate([
        property
    ], BgControl.prototype, "text", void 0);
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmdDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNEJDO1FBekJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFzQjNCLENBQUM7SUFwQkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQseUJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxRQUFRO0lBQ1IsMEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixNQUFNO1FBQ04sT0FBTztRQUNQLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUM7WUFBakMsSUFBSSxNQUFNLFNBQUE7WUFDVixNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQSxVQUFVO1lBQzlCLElBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQztnQkFDZixNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBR3ZCO1FBREMsUUFBUTsyQ0FDYztJQU5OLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E0QjdCO0lBQUQsZ0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QnNDLEVBQUUsQ0FBQyxTQUFTLEdBNEJsRDtrQkE1Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJnQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICAvL+avj+W4p+mDveS8muiwg+eUqFxuICAgIHVwZGF0ZSAoZHQpIHsvL2R077ya5Lik5qyhdXBkYXRl5LmL6Ze055qE5pe26Ze06Ze06ZqUXG4gICAgICAgIC8v6IOM5pmv56e75YqoXG4gICAgICAgIC8vIOmBjeWOhuiDjOaZr1xuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pe1xuICAgICAgICAgICAgYmdOb2RlLnkgLT0gNTAgKiBkdDsvL+avj+enkuenu+WKqDUw5YOP57SgXG4gICAgICAgICAgICBpZihiZ05vZGUueSA8IC04NTApe1xuICAgICAgICAgICAgICAgIGJnTm9kZS55ID0gODUwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scoreControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ddd9q2L1hBVJKGYlYxxW2B', 'scoreControl');
// script/scoreControl.ts

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
var ScoreControl = /** @class */ (function (_super) {
    __extends(ScoreControl, _super);
    function ScoreControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ScoreControl.prototype.start = function () {
    };
    ScoreControl.prototype.scoreAdd = function () {
        var num = this.node.getComponent(cc.Label).string;
        this.node.getComponent(cc.Label).string = Number(num) + 1 + '';
    };
    ScoreControl = __decorate([
        ccclass
    ], ScoreControl);
    return ScoreControl;
}(cc.Component));
exports.default = ScoreControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NvcmVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREOztJQWVBLENBQUM7SUFaRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDRCQUFLLEdBQUw7SUFDQSxDQUFDO0lBQ0QsK0JBQVEsR0FBUjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBWmdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FlaEM7SUFBRCxtQkFBQztDQWZELEFBZUMsQ0FmeUMsRUFBRSxDQUFDLFNBQVMsR0FlckQ7a0JBZm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgIH1cbiAgICBzY29yZUFkZCgpe1xuICAgICAgICBsZXQgbnVtID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBOdW1iZXIobnVtKSArIDEgKyAnJztcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/canvas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5897dBlnO1JeaMOMriYdZ8K', 'canvas');
// script/canvas.ts

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
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.test = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Canvas.prototype.onLoad = function () {
        var _this = this;
        //绑定事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            //触摸点的世界坐标
            var pos = new cc.Vec2(event.getLocationX(), event.getLocationY());
            //转换为节点(局部)空间坐标系
            pos = _this.node.convertToNodeSpaceAR(pos); //将一个点转换到节点 (局部) 空间坐标系，这个坐标系以锚点为原点。
            //给要移动的物体赋值
            _this.test.setPosition(pos);
        });
    };
    Canvas.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], Canvas.prototype, "test", void 0);
    Canvas = __decorate([
        ccclass
    ], Canvas);
    return Canvas;
}(cc.Component));
exports.default = Canvas;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBdUJDO1FBcEJHLFVBQUksR0FBUyxJQUFJLENBQUM7O1FBbUJsQixpQkFBaUI7SUFDckIsQ0FBQztJQW5CRyx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEcsTUFBTTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxVQUFDLEtBQUs7WUFDNUMsVUFBVTtZQUNWLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDakUsZ0JBQWdCO1lBQ2hCLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsbUNBQW1DO1lBQzdFLFdBQVc7WUFDWCxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNBO0lBSEQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVCMUI7SUFBRCxhQUFDO0NBdkJELEFBdUJDLENBdkJtQyxFQUFFLENBQUMsU0FBUyxHQXVCL0M7a0JBdkJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGVzdDpjYy5Ob2RlPW51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvL+e7keWumuS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwoZXZlbnQpPT57XG4gICAgICAgICAgICAvL+inpuaRuOeCueeahOS4lueVjOWdkOagh1xuICAgICAgICAgICAgdmFyIHBvcyA9IG5ldyBjYy5WZWMyKGV2ZW50LmdldExvY2F0aW9uWCgpLGV2ZW50LmdldExvY2F0aW9uWSgpKTtcbiAgICAgICAgICAgIC8v6L2s5o2i5Li66IqC54K5KOWxgOmDqCnnqbrpl7TlnZDmoIfns7tcbiAgICAgICAgICAgIHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpOy8v5bCG5LiA5Liq54K56L2s5o2i5Yiw6IqC54K5ICjlsYDpg6gpIOepuumXtOWdkOagh+ezu++8jOi/meS4quWdkOagh+ezu+S7pemUmueCueS4uuWOn+eCueOAglxuICAgICAgICAgICAgLy/nu5nopoHnp7vliqjnmoTniankvZPotYvlgLxcbiAgICAgICAgICAgIHRoaXMudGVzdC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/setZindex.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23b0cpcSF5C/JvPo6bTwsoV', 'setZindex');
// script/setZindex.ts

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
var SetZIndex = /** @class */ (function (_super) {
    __extends(SetZIndex, _super);
    function SetZIndex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    SetZIndex.prototype.start = function () {
        this.node.setSiblingIndex(10000);
    };
    __decorate([
        property(cc.Label)
    ], SetZIndex.prototype, "label", void 0);
    __decorate([
        property
    ], SetZIndex.prototype, "text", void 0);
    SetZIndex = __decorate([
        ccclass
    ], SetZIndex);
    return SetZIndex;
}(cc.Component));
exports.default = SetZIndex;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2V0WmluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBR3ZCO1FBREMsUUFBUTsyQ0FDYztJQU5OLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FpQjdCO0lBQUQsZ0JBQUM7Q0FqQkQsQUFpQkMsQ0FqQnNDLEVBQUUsQ0FBQyxTQUFTLEdBaUJsRDtrQkFqQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldFpJbmRleCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KDEwMDAwKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eec864u599LBaxv2ebNbtjJ', 'gameOver');
// script/gameOver.ts

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
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameOver.prototype.start = function () {
    };
    GameOver.prototype.gameOver = function (event) {
        cc.director.loadScene('gameStart');
    };
    __decorate([
        property(cc.Label)
    ], GameOver.prototype, "label", void 0);
    __decorate([
        property
    ], GameOver.prototype, "text", void 0);
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtQkM7UUFoQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVl2QixpQkFBaUI7SUFDckIsQ0FBQztJQVhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFkRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQjVCO0lBQUQsZUFBQztDQW5CRCxBQW1CQyxDQW5CcUMsRUFBRSxDQUFDLFNBQVMsR0FtQmpEO2tCQW5Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICBnYW1lT3ZlcihldmVudCl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZVN0YXJ0Jyk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameStartBtnControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb99eIjc+BNPabUGs+6mg/h', 'gameStartBtnControl');
// script/gameStartBtnControl.ts

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
var GameStartBtnControl = /** @class */ (function (_super) {
    __extends(GameStartBtnControl, _super);
    function GameStartBtnControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GameStartBtnControl.prototype.start = function () {
    };
    GameStartBtnControl.prototype.clickBtn = function (event, flag) {
        this.node.getComponent(cc.AudioSource).play();
        setTimeout(function () {
            cc.director.loadScene("feijidazhan");
        }, 1000);
    };
    GameStartBtnControl = __decorate([
        ccclass
    ], GameStartBtnControl);
    return GameStartBtnControl;
}(cc.Component));
exports.default = GameStartBtnControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZVN0YXJ0QnRuQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDs7SUFrQkEsQ0FBQztJQWRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsbUNBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxzQ0FBUSxHQUFSLFVBQVMsS0FBSyxFQUFDLElBQUk7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsVUFBVSxDQUFDO1lBQ1AsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQWhCZ0IsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0FrQnZDO0lBQUQsMEJBQUM7Q0FsQkQsQUFrQkMsQ0FsQmdELEVBQUUsQ0FBQyxTQUFTLEdBa0I1RDtrQkFsQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXJ0QnRuQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgY2xpY2tCdG4oZXZlbnQsZmxhZyl7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZmVpamlkYXpoYW5cIik7XG4gICAgICAgIH0sMTAwMClcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
