const {ccclass, property} = cc._decorator;

@ccclass
export default class SetZIndex extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.setSiblingIndex(10000);
    }

    // update (dt) {}
}
