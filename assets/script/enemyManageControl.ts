import EnemyControl from "./enemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManagerControl extends cc.Component {

    //敌人预制体
    @property(cc.Prefab)
    enemyPre:cc.Prefab = null;
    indexEnemy:number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //每隔2秒创建一个敌人
        let time = 0.4;
        this.schedule(()=>{
            //创建预制节点
            let enemy = cc.instantiate(this.enemyPre);
            //指定父节点为当前场景
            enemy.setParent(cc.find('Canvas/enemyContent'));
            enemy.getComponent(EnemyControl).isCollision = false;
            //指定x，y坐标值
            let width_ = Math.floor(cc.winSize.width);
            enemy.y = this.node.y;
            enemy.x = Math.random() * (width_/2 - 60) * 2 - (width_/2 - 60);
        },time);
    }

    update (dt) {}
}
