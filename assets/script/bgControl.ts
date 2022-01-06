const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {

    }
    //每帧都会调用
    update (dt) {//dt：两次update之间的时间间隔
        //背景移动
        // 遍历背景
        for(let bgNode of this.node.children){
            bgNode.y -= 50 * dt;//每秒移动50像素
            if(bgNode.y < -850){
                bgNode.y = 850;
            }
        }
    }
}
