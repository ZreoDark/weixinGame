
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