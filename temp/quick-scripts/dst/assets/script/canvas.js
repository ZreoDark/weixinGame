
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