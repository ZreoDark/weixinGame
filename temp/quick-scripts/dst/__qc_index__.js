
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