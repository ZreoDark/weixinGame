const {ccclass, property} = cc._decorator;

@ccclass
export default class GameContinue extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    gameContinue(){
        cc.director.resume();
        cc.find('Canvas/bg').getComponent(cc.AudioSource).play();
        cc.find('Canvas/set').active = false;
    }
    // update (dt) {}
}
