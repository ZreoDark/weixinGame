const {ccclass, property} = cc._decorator;

@ccclass
export default class GameStartBtnControl extends cc.Component {

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    clickBtn(event,flag){
        this.node.getComponent(cc.AudioSource).play();
        setTimeout(()=>{
            cc.director.loadScene("feijidazhan");
        },1000)
    }
    // update (dt) {}
}
