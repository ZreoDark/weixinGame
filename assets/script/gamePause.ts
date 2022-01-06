const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePause extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    gamePause(){
        cc.find('Canvas/set').active = true;
        cc.find('Canvas/bg').getComponent(cc.AudioSource).pause();
        cc.director.pause();
    }
    // update (dt) {}
}
