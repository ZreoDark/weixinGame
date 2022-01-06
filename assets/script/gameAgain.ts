const {ccclass, property} = cc._decorator;

@ccclass
export default class GameAgain extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    gameAgain(){
        cc.director.resume();
        cc.find('Canvas/bg').getComponent(cc.AudioSource).play();
        cc.find('Canvas/score/number').getComponent(cc.Label).string = 0 + '';
        cc.find('Canvas/hero1').setPosition(0,-350);
        cc.find('Canvas/bulletContent/bullet1').setPosition(0,-280);
        let childrenEnemy = cc.find('Canvas/enemyContent').children;
        let childBullet = cc.find('Canvas/bulletContent/bullet1').children;
        for(let child of childrenEnemy){
            child.destroy();
        }
        for(let child of childBullet){
            child.destroy();
        }
        cc.find('Canvas/set').active = false;
    }
    // update (dt) {}
}
