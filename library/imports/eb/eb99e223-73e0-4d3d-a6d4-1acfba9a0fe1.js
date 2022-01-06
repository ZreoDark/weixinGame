"use strict";
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