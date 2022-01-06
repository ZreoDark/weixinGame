import EnemyControl from "./enemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {

   @property
   speed:number = 850;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       
    }

    start () {
        // this.node.setSiblingIndex(2);
    }

    update (dt) {
            this.node.y += this.speed * dt;
            //子弹飞出屏幕要销毁
            if(this.node.y > 850 && this.node){
                this.node.destroy();
            }
    }
    //当碰撞系统检测到有碰撞产生时，将会以回调的方式通知使用者
    onCollisionEnter(other){
        //碰到敌人，先敌人销毁，再自己销毁
        if(other.tag == 0){
            other.getComponent(EnemyControl).isCollision = !other.getComponent(EnemyControl).isCollision;
             //销毁敌人
            if(other.getComponent(EnemyControl).isCollision){
                other.getComponent(EnemyControl).die();
            }  
        }
    }
    //碰撞结束后
    onCollisionExit(other, self) {
        //销毁自己
        if(this.node){
            this.node.destroy();
        }
        
    }

}
