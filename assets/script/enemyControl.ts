import PlayerControl from "./playerControl";
import ScoreControl from "./scoreControl";
const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {

    isDie:boolean = false;
    // LIFE-CYCLE CALLBACKS:
    isCollision:boolean = false;
    onLoad () {
        
    }

    start () {
        // this.node.setSiblingIndex(2);
    }
    die(){//被子弹碰撞之后就会销毁
        //加载爆炸图片 
        if(this.node.y < 396){
            this.isDie = true;
            cc.loader.loadRes('image/imageAny',cc.SpriteAtlas,(err,res)=>{
                //cc.loader.loadRes():动态加载resources文件里的资源
                //sprite：精灵组建
                // spriteFrame：sprite组件使用图像资源的一种方式，每个texture文件都会产生一个 SpriteFrame 的图像资源
                this.node.getComponent(cc.Sprite).spriteFrame = res.getSpriteFrame('enemy0_die');
                setTimeout(()=>{
                    if(this.node){
                        //攻击成功音效
                        cc.find('Canvas/audio').getComponent(cc.AudioSource).play();
                        //分数加1
                        cc.find('Canvas/score/number').getComponent(ScoreControl).scoreAdd();
                        this.node.destroy();
                    }
                },300)
            })
        }
        
        
        
    }
    update (dt) {
        //敌人移动
        if(!this.isDie){
            this.node.y -= 300 * dt;
        }
        if(this.node.y < -455 && this.node){
            this.node.destroy();
        }
    }
     //当碰撞系统检测到有碰撞产生时，将会以回调的方式通知使用者
     onCollisionEnter(other){
        //碰到敌人，先敌人销毁，再自己销毁
        if(other.tag == 2){
            other.getComponent(PlayerControl).isCollision = !other.getComponent(PlayerControl).isCollision;
            if(other.getComponent(PlayerControl).isCollision){
                //销毁我方飞机
                other.getComponent(PlayerControl).die();
                //销毁自己(敌方飞机)
                if(this.node){
                    this.node.destroy();
                }
            } 
        }
    }
    
}
