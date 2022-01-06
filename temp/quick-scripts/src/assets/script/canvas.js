"use strict";
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