const {ccclass, property} = cc._decorator;

@ccclass
export default class ScoreControl extends cc.Component {

    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }
    scoreAdd(){
        let num = this.node.getComponent(cc.Label).string;
        this.node.getComponent(cc.Label).string = Number(num) + 1 + '';
    }

    // update (dt) {}
}
