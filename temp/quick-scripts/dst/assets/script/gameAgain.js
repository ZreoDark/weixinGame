
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